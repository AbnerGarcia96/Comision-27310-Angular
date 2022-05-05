import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const cargarSesion = createAction(
  '[Auth] Cargar Sesion',
  props<{usuario: Usuario}>()
);

export const cerrarSesion = createAction(
  '[Auth] Cerrar Sesion'
);




