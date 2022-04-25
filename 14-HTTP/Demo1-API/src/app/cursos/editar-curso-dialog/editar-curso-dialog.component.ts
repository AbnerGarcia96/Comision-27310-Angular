import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editar-curso-dialog',
  templateUrl: './editar-curso-dialog.component.html',
  styleUrls: ['./editar-curso-dialog.component.css']
})
export class EditarCursoDialogComponent implements OnInit {
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
    private dialogRef: MatDialogRef<EditarCursoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private fb: FormBuilder
  ) {
    this.formulario = this.fb.group({
      nombre: new FormControl('', [Validators.required]),
      fechaInicio: new FormControl('', [Validators.required]),
      fechaFin: new FormControl('', [Validators.required]),
      profesor: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    
  }

  editarCurso(){
    
  }

}
