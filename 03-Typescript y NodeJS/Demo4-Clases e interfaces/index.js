/*let c: Curso = {
    nombre: "Angular",
    profesor: "Abner",
    tutores: ["Victoria", "Fernando", "Pablo"]
};*/
var Camada = /** @class */ (function () {
    function Camada(nombre, profesor, nombreCamada, tutores) {
        this.bolleano = true || false;
        this.nombre = nombre;
        this.profesor = profesor;
        this.tutores = tutores;
        this.nombreCamada = nombreCamada;
    }
    Camada.prototype.saludar = function () {
        return "Hola";
    };
    return Camada;
}());
var objeto1 = new Camada("Angular", "Abner", "27310", ["Victoria", "Fernando", "Pablo"]);
console.log(objeto1);
