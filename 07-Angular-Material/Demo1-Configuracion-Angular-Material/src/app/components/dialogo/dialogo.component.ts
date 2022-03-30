import { Component, OnInit } from '@angular/core';
import { MatDialog, } from '@angular/material/dialog';
import { ContenidoDialogoComponent } from '../contenido-dialogo/contenido-dialogo.component';

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})
export class DialogoComponent implements OnInit {

  constructor(
    public dialogoRef: MatDialog
  ){ }

  ngOnInit(): void {
  }

  abrirDialogo(){
    this.dialogoRef.open(ContenidoDialogoComponent, {
      data: {
        nombre: 'Abner',
        curso: 'Angular',
        rol: 'Profesor'
      }
    });
  }

}
