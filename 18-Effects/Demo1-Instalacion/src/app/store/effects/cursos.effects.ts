import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map } from "rxjs";
import { CursosService } from "src/app/core/cursos.service";
import { cargarCursos, cursosCargados } from "../action/cursos.action";

@Injectable()
export class CursosEffects{
    cargarCursosEffect = createEffect(() => this.actions$.pipe(
        ofType(cargarCursos),
        exhaustMap(() => this.cursosSerice.obtenerCursos().pipe(
            map(cursos => cursosCargados({cursos}))
        )),
    ));

    constructor(
        private actions$: Actions,
        private cursosSerice: CursosService
    ){}
}