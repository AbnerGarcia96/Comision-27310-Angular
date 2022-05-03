import { createReducer, on } from "@ngrx/store";
import { SesionSate } from "src/app/models/sesion.state.model";
import { crearSesion } from "../actions/sesion.action";

export const estadoInicial: SesionSate = {
    sesionActiva: false,
    usuario: {
        id: "",
        nombre: "",
        apellido: "",
        correo: "",
        contrasena: "",
        rol: ""
    }
}

export const loginReducer = createReducer(
    estadoInicial, 
    on(crearSesion, (estado, {usuario}) => {
        return { ...estado, sesionActiva: true, usuario }
    }

    )
)