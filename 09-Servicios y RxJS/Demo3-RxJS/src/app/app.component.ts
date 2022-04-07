import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Curso } from './models/curso';
import { CursoService } from './services/curso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cursos: any;
  formulario: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required])
  });

  constructor(
    private cursoService: CursoService
  ){}

  ngOnInit() {
    // this.cursoService.obtenerCursosPromise().then((cursos) => {
    //   this.cursos = cursos;
    //   console.log("Desde la promise", this.cursos);
    // }).catch((error) => {
    //   console.log(error);
    // }); 

    this.cursoService.obtenerCursosObservable().subscribe((cursos)=>{
      this.cursos = cursos;
    })
  }

  eliminarCurso(id: number){
    this.cursoService.eliminarCurso(id);
  } 

  agregarCurso(){
    this.cursoService.agregarCurso(this.formulario.value);
  }
}
