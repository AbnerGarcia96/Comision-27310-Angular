import { Estudiante } from "./estudiante";
import { Profesor } from "./profesor";

export interface Curso{
    id: string;
    nombre: string;
    fechaInicio: Date;
    fechaFin: Date;
    profesor: Profesor;
    estudiantes: Estudiante[];
}