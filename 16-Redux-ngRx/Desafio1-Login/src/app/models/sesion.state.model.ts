import { Usuario } from "./usuario.model";

export interface SesionSate{
    sesionActiva: boolean;
    usuario: Usuario;
}