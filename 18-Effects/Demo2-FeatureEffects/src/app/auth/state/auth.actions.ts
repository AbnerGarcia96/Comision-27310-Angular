import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const loginAction = createAction(
  '[Auth] Iniciar Sesion',
  props<{correo: string, contrasena: string}>()
);

export const cargarSesion = createAction(
  '[Auth] Cargar Sesion',
  props<{usuario: Usuario}>()
);

export const cerrarSesion = createAction(
  '[Auth] Cerrar Sesion'
);




