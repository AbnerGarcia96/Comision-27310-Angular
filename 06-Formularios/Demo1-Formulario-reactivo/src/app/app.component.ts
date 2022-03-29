import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formularioContacto: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mensaje: new FormControl('')
  });
  constructor() {}

  submit(txtNombre: string) {
    console.log(txtNombre);
  }
}
