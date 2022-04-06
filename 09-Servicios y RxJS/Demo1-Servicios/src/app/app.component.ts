import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formulario: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required])
  });

  constructor(){}

  agregarCurso(){
    
  }
}

