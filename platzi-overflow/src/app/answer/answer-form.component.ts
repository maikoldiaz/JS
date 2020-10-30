import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Answer } from './answer.model';
import { User } from "../auth/user.model";
import { Question } from '../question/question.model';
import { QuestionService } from '../question/question.service';
import * as SmoothScroll from "smooth-scroll";

@Component({
    selector: 'app-answer-form',
    templateUrl: './answer-form.component.html',
    styleUrls: ['./answer-form.component.css'],
    providers: [QuestionService]
})

export class AnswerFormComponent {
    constructor(private questionService: QuestionService) { }
    @Input() question: Question;
    SmoothScroll = new SmoothScroll();
    onSubmit(form: NgForm) { //metodo con el nombre que comunemtante se utiliza para mandar datos.
        const answer = new Answer(
            form.value.description,
            this.question
        );
        this.questionService.addAnswer(answer)
            .subscribe((data: Answer) => {
                this.question.answers.unshift(data)
                const anchor = document.querySelector('#title');
                this.SmoothScroll.animateScroll(anchor);
            },
                (e) => console.log(e))
        form.reset();
    }
}