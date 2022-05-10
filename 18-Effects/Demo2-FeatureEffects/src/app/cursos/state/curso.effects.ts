import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map } from "rxjs";
import { CursoService } from "../curso.service";
import { cargarCursos, cursosCargados } from "./curso.actions";

@Injectable()
export class CursosEffects{
    cursosEffects = createEffect(() => this.actions$.pipe(
        ofType(cargarCursos),
        exhaustMap(() => this.cursos.obtenerCursos().pipe(
            map(cursos => cursosCargados({cursos}))
        ))
    ))
    constructor(
        private actions$: Actions,
        private cursos: CursoService
    ){}
}