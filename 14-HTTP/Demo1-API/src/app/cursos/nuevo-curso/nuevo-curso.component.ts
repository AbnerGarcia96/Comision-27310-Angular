import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Profesor } from 'src/app/core/inicio/modelos/profesor';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-nuevo-curso',
  templateUrl: './nuevo-curso.component.html',
  styleUrls: ['./nuevo-curso.component.css']
})
export class NuevoCursoComponent implements OnInit {
  formulario: FormGroup;
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
    private fb: FormBuilder,
    private cursoService: CursosService,
    private router: Router
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

  crearCurso(){
    console.log(this.formulario.value);
    this.cursoService.crearCurso(this.formulario.value).subscribe(data => {
      console.log(data);
    });
    this.router.navigate(['cursos', 'lista']);
  }

}
