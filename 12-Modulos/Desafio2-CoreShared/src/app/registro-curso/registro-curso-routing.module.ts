import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DetalleCursoComponent } from "./components/detalle-curso/detalle-curso.component";
import { RegistroCursoComponent } from "./components/registro-curso/registro-curso.component";

const routes: Routes = [
    {path: 'curso', component: DetalleCursoComponent},
    {path: 'curso/registro', component: RegistroCursoComponent}
];

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class RegistroCursoRoutingModule{}