import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InicioComponent } from "./core/inicio/inicio.component";
import { PaginaNoEncontradaComponent } from "./core/pagina-no-encontrada/pagina-no-encontrada.component";

const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: '**', component: PaginaNoEncontradaComponent},
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}