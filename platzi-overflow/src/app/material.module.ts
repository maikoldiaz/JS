import {NgModule} from "@angular/core"
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule,MatButtonModule,MatInputModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';


const modules = [
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
]

@NgModule({
    imports: modules,
    exports:modules
})

export class MaterialModule{};