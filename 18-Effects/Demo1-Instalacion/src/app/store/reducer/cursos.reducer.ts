import { createReducer, on } from "@ngrx/store";
import { Curso } from "src/app/models/curso";
import { cargarCursos, cursosCargados } from "../action/cursos.action";

export interface CursoState{
    cargando: boolean;
    cursos: Curso[];
}

export const estadoInicial: CursoState = {
    cargando: false,
    cursos: []
}

export const cursosReducer = createReducer(
    estadoInicial,
    on(cargarCursos, (state)=>{
        return {...state, cargando: true}
    }),
    on(cursosCargados, (state, {cursos}) => {
        return {...state, cargando: false, cursos}
    })
);