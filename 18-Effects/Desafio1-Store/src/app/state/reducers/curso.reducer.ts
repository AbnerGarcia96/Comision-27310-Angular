import { createReducer, on } from "@ngrx/store";
import { CursoState } from "src/app/models/curso.state";
import { cargarCursos, cursosCargados } from "../actions/curso.action";

export const estadoInicial: CursoState = {
    cargando: false,
    cursos: []
}

export const cursosReducer = createReducer(
    estadoInicial,
    on(cargarCursos, (estado) => {
        // let objeto = estado;
        // objeto.cargando = true;
        // return objeto;
        // Son equivalentes con este codigo
        return { ...estado, cargando: true }
    }),
    on(cursosCargados, (estado, {cursos}) => {
        return { ...estado, cargando: false, cursos}
    })
)