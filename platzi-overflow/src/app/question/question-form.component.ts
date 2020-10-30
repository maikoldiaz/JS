import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import icons from './icons';
import { Question } from './question.model';
import { QuestionService } from './question.service';


@Component({
    selector: "app-question-form",
    templateUrl: "question-form.component.html",
    styleUrls: ["question-form.component.css"],
    providers: [QuestionService]
})

export class QuestionFormComponent {
    constructor(private questionSerice: QuestionService,
                private router : Router) { }
    iconList: Object[] = icons;
    icon: string;

    getIconVersion(icon: any) {
        let version;
        if (icon.versions.font.includes('plain-wordmark')) {
            version = 'plain-wordmark';
        } else {
            version = icon.versions.font[0]
        }
        return `devicon-${icon.name}-${version} colored`;
    }

    onSubmit(form: NgForm) {
        if (form.value.title && form.value.description) {
            const q = new Question(
                form.value.title,
                form.value.description,
                new Date(),
                form.value.icon
            );
            this.questionSerice.addQuestion(q).subscribe((data :  Question) => this.router.navigate(['/questions', data._id]) ,(e) => console.log(e))
        }
    }
}