import {NgModule} from "@angular/core"
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule,MatButtonModule,MatInputModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from "@angular/material"
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import {MatMenuModule} from '@angular/material/menu';

const modules = [
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatMenuModule
]

@NgModule({
    imports: modules,
    exports:modules
})

export class MaterialModule{};