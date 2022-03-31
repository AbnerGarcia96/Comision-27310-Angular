import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ContenidoDialogComponent } from '../contenido-dialog/contenido-dialog.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    comidaFavorita: new FormControl('', [Validators.required]),
    fecha: new FormControl('')
  });
  listaPersonas: any[] = [];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {}

  agregar(){
    this.listaPersonas.push(this.formulario.value);
    this.dialog.open(ContenidoDialogComponent, {
      data: this.listaPersonas
    });
  }

}
