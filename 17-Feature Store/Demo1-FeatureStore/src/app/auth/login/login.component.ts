import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup = new FormGroup({
    correo: new FormControl(''),
    contrasena: new FormControl('')
  });
  
  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  login(){
    this.auth.login(this.formulario.value.correo, this.formulario.value.contrasena).subscribe((usuario) => {
      if(usuario){
        this.router.navigate(['']);
      }else{
        alert("Credenciales incorrectas");
      }
    });
  }

}
