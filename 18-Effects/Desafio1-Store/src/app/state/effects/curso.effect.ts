import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map } from "rxjs";
import { CursoService } from "src/app/core/curso.service";
import { cargarCursos, cursosCargados } from "../actions/curso.action";

@Injectable()
export class CursoEffects{
    cargarCursosEffect = createEffect(() => this.actions$.pipe(
        ofType(cargarCursos),
        exhaustMap(() => this.cursoService.obtenerCursos().pipe(
            map(cursos => cursosCargados({cursos}))
        ))
    ));

    constructor(
        private actions$: Actions,
        private cursoService: CursoService
    ){}
}