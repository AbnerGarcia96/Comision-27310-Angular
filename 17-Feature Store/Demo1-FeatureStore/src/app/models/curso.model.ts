import { Usuario } from "./usuario.model";

export interface Curso{
    id: string;
    nombre: string;
    fechaInicio: Date;
    fechaFin: Date;
    profesor: Usuario;
    estudiantes: Usuario[]
}