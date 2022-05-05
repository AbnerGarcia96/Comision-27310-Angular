import { createAction, props } from '@ngrx/store';
import { Curso } from 'src/app/models/curso.model';

export const cargarCursos = createAction(
  '[Curso] Cargar Cursos'
);

export const cursosCargados = createAction(
  '[Curso] Cursos Cargados',
  props<{cursos: Curso[]}>()
)




