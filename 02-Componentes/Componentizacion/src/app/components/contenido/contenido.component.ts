import { Component } from '@angular/core';

@Component({
    selector: 'app-contenido',
    templateUrl: './contenido.component.html',
    styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent {
    texto = "Se esta mostrando Contenido Component";
}