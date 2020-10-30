import { Routes, RouterModule } from "@angular/router"
import { SigninScreenComponent } from './auth/signin-screen.component'
import { SignupScreenComponet } from './auth/signup-screen.component'
import { QuestionListComponent } from './question/question-list.component'
import { QUESTION_ROUTES } from "./question/question.routing";

const APP_ROUTES: Routes = [
    { path: '', component: QuestionListComponent, pathMatch: 'full' },
    { path: 'signin', component: SigninScreenComponent },
    { path: 'signup', component: SignupScreenComponet },
    { path: 'questions', children: QUESTION_ROUTES }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
