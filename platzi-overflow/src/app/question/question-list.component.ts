import { Component } from "@angular/core"
import { Question } from './question.model'
@Component({
    selector: "app-question-list",
    templateUrl: "question-list.component.html",
    styles : [`
        i {
            font-size : 45px
        }
    `]
})
export class QuestionListComponent {
    questions: Question[] = new Array(10).fill(new Question("Tengo muchas preguntas y no se como hacerlo para que eso se pueda", "Como hago x cosas", new Date(),"devicon-android-plain"));
}