import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-curso',
  templateUrl: './nuevo-curso.component.html',
  styleUrls: ['./nuevo-curso.component.css']
})
export class NuevoCursoComponent{
  formulario!: FormGroup;
  profesores: any[] = [{
    id: "1",
    nombre: "Abner",
    apellido: "Garcia",
    correo: "abner@gmail.com"
  },{
    id: "2",
    nombre: "Pablo",
    apellido: "Garcia",
    correo: "pablo@gmail.com"
  },{
    id: "3",
    nombre: "Victoria",
    apellido: "Cordero",
    correo: "victoria@gmail.com"
  },{
    id: "4",
    nombre: "Fernando",
    apellido: "Olvera",
    correo: "fernando@gmail.com"
  }];


  constructor(
    private fb: FormBuilder,
  ) {
    this.formulario = this.fb.group({
      nombre: new FormControl('', [Validators.required]),
      fechaInicio: new FormControl('', [Validators.required]),
      fechaFin: new FormControl('', [Validators.required]),
      profesor: new FormControl('', [Validators.required])
    });
  }

}
