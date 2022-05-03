import { createAction, props } from "@ngrx/store";
import { Usuario } from "../../models/usuario.model";

export const crearSesion = createAction(
    '[Auth Login] Sesion creada',
    props<{ usuario: Usuario }>()
);