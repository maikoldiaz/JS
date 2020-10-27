import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Answer } from './answer.model';
import {User} from "../auth/user.model";
import { Question } from '../question/question.model';

@Component({
    selector: 'app-answer-form',
    templateUrl: './answer-form.component.html',
    styleUrls : ['./answer-form.component.css']
})

export class AnswerFormComponent {
    @Input() question: Question;
    onSubmit(form: NgForm) { //metodo con el nombre que comunemtante se utiliza para mandar datos.
        const answer = new Answer(
            form.value.description,
            this.question,
            new Date(),
            new User("Maikol","Diaz",null,null)
        );
        this.question.answers.unshift(answer);
        form.reset();
    }
}