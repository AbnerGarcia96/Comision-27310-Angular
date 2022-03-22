"use strict";
exports.__esModule = true;
exports.Camada = void 0;
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
exports.Camada = Camada;
