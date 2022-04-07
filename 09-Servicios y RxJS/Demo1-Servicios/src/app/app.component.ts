import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Curso } from './models/curso';
import { CursoBetaService } from './services/curso-beta.service';
import { CursoService } from './services/curso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {provide: CursoService, useClass: CursoBetaService}
  ]
})
export class AppComponent {
  cursos: Curso[] = [];
  formulario: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required])
  });

  constructor(
    private cursoService: CursoService // Una instancia de CursoBetaService
    
  ){
    this.cursos = this.cursoService.obtenerCursos();
  }

  agregarCurso(){
    let curso = this.formulario.value;
    this.cursoService.agregarCurso(curso);
  }

  eliminarCurso(id: number){
    this.cursoService.eliminarCurso(id);
  }
}

