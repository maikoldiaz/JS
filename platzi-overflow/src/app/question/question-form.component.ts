import { Component,ElementRef,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import icons from './icons';
import { Question } from './question.model';

@Component({
    selector: "app-question-form",
    templateUrl: "question-form.component.html",
    styleUrls : ["question-form.component.css"]
})

export class QuestionFormComponent{
    
    iconList: Object[] = icons;
    icon : string;

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
        if(form.value.title && form.value.description){
        const q = new Question(
            form.value.title,
            form.value.description,
            new Date(),
            form.value.icon
        );
        console.info(q)}
    }
}