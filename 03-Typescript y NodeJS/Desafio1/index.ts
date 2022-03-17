// Cambiar a typescript
const nombre: string = "Miguelo";
let edad: number = 30;

// Cambiar a interface
interface Spiderman{
    nombre: string;
    poderes: Array<string>;
}

// Cambiar a una clase
class Personaje implements Spiderman{
    nombre: string;
    poderes: string[];
    edad: number;

    constructor(nombre: string, edad: number, poderes: Array<string>){
        this.nombre = nombre;
        this.edad = edad;
        this.poderes = poderes;
    }
}

const personaje: Personaje = new Personaje("Jeremias", 18, ["trepar", "fuerza", "agilidad", "telas de araña"]);

console.log(personaje);
