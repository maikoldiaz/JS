import { OnDestroy, OnInit } from '@angular/core';
import { Component } from "@angular/core";
import { Question } from "./question.model";
import { QuestionService } from './question.service';
import { ActivatedRoute } from '@angular/router'
import { parseLazyRoute } from '@angular/compiler/src/aot/lazy_routes';

@Component({
    selector: "app-question-detail",
    templateUrl: "./question-detail.component.html",
    styleUrls:["./question-detail.component.css"],
    providers : [QuestionService]
})

export class QuestionDetailComponent implements OnInit,OnDestroy{
    constructor(
        private questionService : QuestionService,
        private route : ActivatedRoute
        ) {
    }
    
    question? : Question;
    loading : boolean = true;
    sub : any;
    
    async ngOnInit() {
        this.sub = this.route.params.subscribe(async p => {
            this.question = await this.questionService.getQuestion(p.id) as Question;
            this.loading = false;
        })
    }
    
    ngOnDestroy(){
        this.sub.unsubscribe()
    }
    

}