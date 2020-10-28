import {NgModule} from "@angular/core"
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule,MatButtonModule,MatInputModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from "@angular/material"
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRadioModule} from '@angular/material/radio';


const modules = [
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule,
    MatRadioModule
]

@NgModule({
    imports: modules,
    exports:modules
})

export class MaterialModule{};