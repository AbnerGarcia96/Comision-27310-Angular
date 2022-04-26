import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Curso } from 'src/app/core/inicio/modelos/curso';
import { Profesor } from 'src/app/core/inicio/modelos/profesor';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-editar-curso-dialog',
  templateUrl: './editar-curso-dialog.component.html',
  styleUrls: ['./editar-curso-dialog.component.css']
})
export class EditarCursoDialogComponent implements OnInit {
  formulario!: FormGroup;
  profesores: Profesor[] = [{
    id: 1,
    nombre: "Abner",
    apellido: "Garcia",
    correo: "abner@gmail.com"
  },{
    id: 2,
    nombre: "Pablo",
    apellido: "Garcia",
    correo: "pablo@gmail.com"
  },{
    id: 3,
    nombre: "Victoria",
    apellido: "Cordero",
    correo: "victoria@gmail.com"
  },{
    id: 4,
    nombre: "Fernando",
    apellido: "Olvera",
    correo: "fernando@gmail.com"
  }];
  
  constructor(
    private dialogRef: MatDialogRef<EditarCursoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Curso,
    private fb: FormBuilder,
    private cursoService: CursosService
  ) {
    this.formulario = this.fb.group({
      nombre: new FormControl(this.data.nombre, [Validators.required]),
      fechaInicio: new FormControl(this.data.fechaInicio, [Validators.required]),
      fechaFin: new FormControl(this.data.fechaFin, [Validators.required]),
      profesor: new FormControl(this.data.profesor, [Validators.required])
    });
  }

  ngOnInit(): void {
    console.log(this.data);
  }

  editarCurso(){
    let curso: Curso = {
      id: this.data.id,
      nombre: this.formulario.value.nombre,
      profesor: this.formulario.value.profesor,
      fechaInicio: this.formulario.value.fechaInicio,
      fechaFin: this.formulario.value.fechaFin,
      estudiantes: this.data.estudiantes
    } 
    console.log(curso);
    this.cursoService.modificarCurso(curso).subscribe(console.log);
    this.dialogRef.close();
  }
}
