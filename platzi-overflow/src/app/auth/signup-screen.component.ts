import { Component } from "@angular/core";
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { User } from './user.model';

@Component({
    selector: "app-signup-screen",
    templateUrl: "./signup-screen.component.html",
    styleUrls: ["./signup-screen.component.css"]
})

export class SignupScreenComponet {
    constructor(private authService : AuthService,private router : Router){}
    signupForm = new FormGroup({
        names: new FormControl(null, [Validators.required]),
        lastName: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required]),
        passwordConfirm: new FormControl(null, [Validators.required])
    },this.pwdMatchValidator.bind(this));

    onSubmit(form: NgForm) {
        if (this.signupForm.valid) {
            const {names,lastName,email,password} = this.signupForm.value
            let user = new User(password,email,names,lastName)
            this.authService.signup(user)
                    .subscribe((data : any) => {
                        this.authService.loging(data);
                        this.router.navigate(['/'])
                    },
                    (e) => console.log(e))
            form.resetForm();
            this.signupForm.reset();
        }
    }
    pwdMatchValidator(frm: FormGroup) {
        return frm.controls['password'].value === frm.controls['passwordConfirm'].value ? null : {'mismatch': true};
     }
}