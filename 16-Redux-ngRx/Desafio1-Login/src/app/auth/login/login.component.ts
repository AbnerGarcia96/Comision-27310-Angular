import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { crearSesion } from 'src/app/state/actions/sesion.action';
import { AppState } from 'src/app/state/app.state';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup = new FormGroup({
    correo: new FormControl(''),
    contrasena: new FormControl(''),
  })

  constructor(
    private auth: AuthService,
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(){
    this.auth.login(this.formulario.value.correo, this.formulario.value.contrasena).subscribe((usuario) => {
      if(usuario){
        this.store.dispatch(crearSesion({usuario: usuario}));
        this.router.navigate(['']);
      }else{
        alert("Credenciales incorrectas");
      }
    })
  }

}
