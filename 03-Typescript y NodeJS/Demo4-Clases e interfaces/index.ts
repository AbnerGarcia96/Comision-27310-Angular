interface Curso {
    nombre: string;
    profesor: string;
    tutores?: Array<string>;

    saludar(): string
}

/*let c: Curso = {
    nombre: "Angular",
    profesor: "Abner",
    tutores: ["Victoria", "Fernando", "Pablo"]
};*/

class Camada implements Curso {
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

let objeto1: Camada = new Camada("Angular", "Abner", "27310", ["Victoria", "Fernando", "Pablo"]);
console.log(objeto1);