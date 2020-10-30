import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { User } from './user.model';
import { Router } from "@angular/router";

@Component({
    selector: "app-signin-screen",
    templateUrl: "./signin-screen.component.html",
    styleUrls: ["./signin-screen.component.css"]
})

export class SigninScreenComponent {

    constructor(private authService: AuthService,private router : Router){}

    signinForm = new FormGroup({
        email: new FormControl(null, [
            Validators.required,
            Validators.email
        ]),
        password: new FormControl(null, [
            Validators.required
        ]
        )
    });

    onSubmit() {
        if (this.signinForm.valid) {
            const { email, password } = this.signinForm.value;
            const user = new User(password, email, null, null)
            this.authService.signin(user)
                .subscribe((data : any) => {
                    this.authService.loging(data);
                    this.router.navigate(['/'])
                },
                (e) => console.log(e))
        }
    }
}