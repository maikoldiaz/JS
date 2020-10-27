import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './user.model';

@Component({
    selector: "app-signin-screen",
    templateUrl: "./signin-screen.component.html",
    styleUrls: ["./signin-screen.component.css"]
})

export class SigninScreenComponent {
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
            console.log(user);
        }
    }
}