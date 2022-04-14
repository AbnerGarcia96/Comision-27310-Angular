import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CursoComponent } from "./components/curso/curso.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { PaginaNoEncontradaComponent } from "./components/pagina-no-encontrada/pagina-no-encontrada.component";

const routes: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'cursos', component: CursoComponent},
    {path: '', redirectTo: 'inicio', pathMatch:'full'},
    {path: '**', component: PaginaNoEncontradaComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}