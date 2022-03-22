import {Curso} from './Curso';

export class Camada implements Curso {
    nombre: string;
    profesor: string;
    tutores: string[] | undefined;
    nombreCamada: string;
    bolleano: boolean = true || false;

    constructor(nombre: string, profesor: string, nombreCamada: string, tutores?: string[]){
        this.nombre = nombre;
        this.profesor = profesor;
        this.tutores = tutores;
        this.nombreCamada = nombreCamada;
    }

    saludar(): string {
        return "Hola";
    }
}