import { Injectable } from "@angular/core";
import { Question } from './question.model';
import { HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http"
import { environment } from 'src/environments/environment';
import urljoin from 'url-join';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Answer } from '../answer/answer.model';

@Injectable()

export class QuestionService{
    questionsUrl: string;
    constructor(private http : HttpClient){
        this.questionsUrl = urljoin(environment.apiUrl,'questions');
    }
    getQuestions(){
        return this.http.get(this.questionsUrl).toPromise();
    }

    getQuestion(id) {
        const url = urljoin(this.questionsUrl,id);
        return this.http.get(url).toPromise();
    }

    addQuestion(question : Question){
        const body = JSON.stringify(question);
        const headers = new HttpHeaders({ 'Content-Type' : 'application/json'});
        const url = `${this.questionsUrl}${this.getTokenQuery()}`;  
        return this.http.post(url ,body,{headers})
                    // .pipe(map((res : Response) => res.json()),catchError(this.handleErrros))
    }

    addAnswer(answer : Answer){
        const answ = {
            description : answer.description,
            question : {
                _id : answer.question._id
            }
        }
        const body = JSON.stringify(answ);
        const headers = new HttpHeaders({ 'Content-Type' : 'application/json'});
        let url = urljoin(this.questionsUrl, `${answer.question._id}`,'answers');
        url = `${url}${this.getTokenQuery()}`;
        console.log(url);
        console.log(body);
        return this.http.post(url,body,{headers})
    }

    handleErrros(error: HttpErrorResponse){
        let errMsg = error.message ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server Error';
        return throwError(errMsg);
    }
    getTokenQuery(){
        const token = localStorage.getItem('token');
        return `?token=${token}`;
    }
}