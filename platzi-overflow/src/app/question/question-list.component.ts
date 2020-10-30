import { Component, OnInit } from "@angular/core"
import { Question } from './question.model'
import { QuestionService } from "./question.service";
@Component({
    selector: "app-question-list",
    templateUrl: "question-list.component.html",
    styleUrls : ["question-list.component.css"],
    providers : [QuestionService]
})
export class QuestionListComponent implements OnInit {
    constructor(private questionService : QuestionService){}
    
    questions: Question[];
    loading : boolean = true;

    async ngOnInit() {
        this.questions = await this.questionService
            .getQuestions() as Question[];
        this.loading = false;    
    }
}