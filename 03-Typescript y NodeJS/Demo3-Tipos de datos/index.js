var numero = 1.0;
var booleano = true || false;
var cadena = "Hola";
var arreglo1 = [1, 2, 3, 4, 5];
var arreglo2 = [10, 11, 12, 13];
var tupla = [1, "Abner Garcia"];
var catalogo;
(function (catalogo) {
    catalogo[catalogo["Si"] = 1] = "Si";
    catalogo[catalogo["No"] = 2] = "No";
})(catalogo || (catalogo = {}));
console.log(catalogo.Si, catalogo.No);