import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InicioComponent } from "./components/inicio/inicio.component";

const routes: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: '', redirectTo: 'inicio', pathMatch:'full'}
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}