import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import { AuthService } from '../auth.service';
import { cargarSesion, cerrarSesion } from '../state/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup = new FormGroup({
    correo: new FormControl('', [Validators.required]),
    contrasena: new FormControl('', [Validators.required])
  });

  constructor(
    private auth: AuthService,
    private router: Router,
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  login(){
    let correo = this.formulario.value.correo;
    let contrasena = this.formulario.value.contrasena;

    this.auth.login(correo, contrasena).subscribe((usuario: Usuario) => {
      if(usuario){
        this.store.dispatch(cargarSesion({usuario}));
        this.router.navigate(['']);
      }else{
        alert("Credenciales incorrectas");
      }
    });
  }
}
