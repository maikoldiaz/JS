import { Injectable } from "@angular/core";
import urljoin  from "url-join";
import { environment } from 'src/environments/environment';
import { User } from './user.model';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
@Injectable()

export class AuthService{
    userUrl :string
    currentUser? : User;
    constructor(private http:HttpClient){
        this.userUrl = urljoin(environment.apiUrl,'auth');
        if(this.isLognin()){
            const { userId, email,firstName, lastName } = JSON.parse(localStorage.getItem('user'))
            this.currentUser = new User(null,email,firstName,lastName,userId)
        }
    }

    signin(user:User){
        const body = JSON.stringify(user);
        const headers = new HttpHeaders({ 'Content-Type' : 'application/json'});
        return this.http.post(urljoin(this.userUrl,'signin'),body,{headers})
    }

    loging = ({token, userId,firstName,lastName,email}) => {
        this.currentUser = new User(null,email,firstName,lastName,userId);
        localStorage.setItem('token',token);
        localStorage.setItem('user',JSON.stringify({userId,firstName,lastName,email}));
    }

    isLognin(){
        return localStorage.getItem('token') !== null
    }

    logout(){
        localStorage.clear();
        this.currentUser = null;
    }

    signup(user: User){
        const body = JSON.stringify(user);
        const headers = new HttpHeaders({ 'Content-Type' : 'application/json'});
        return this.http.post(urljoin(this.userUrl,'signup'),body,{headers})
    }
}