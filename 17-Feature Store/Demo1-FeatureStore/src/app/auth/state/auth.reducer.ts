import { Action, createReducer, on } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import * as AuthActions from './auth.actions';

export const authFeatureKey = 'auth';

export interface AuthState {
  usaurioActivo: Usuario
}

export const initialState: AuthState = {
  usaurioActivo: {
    id: "",
    nombre: "",
    apellido: "",
    contrasena: "",
    correo: "",
    rol: ""
  }
};

export const authReducer = createReducer(
  initialState,

  on(AuthActions.cargarSesion, (state, {usuario}) => {
    return {...state, usaurioActivo: usuario}
  }),

  on(AuthActions.cerrarSesion, (state) => {
    return initialState;
  })

);
