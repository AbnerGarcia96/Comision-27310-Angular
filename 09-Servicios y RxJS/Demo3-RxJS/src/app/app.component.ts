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
  cursos: Curso[] = [];
  formulario: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required])
  });

  ngOnInit() {
    
  }

  eliminarCurso(id: number){

  }

  agregarCurso(){

  }
}
