import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService
  ) {
    this.formulario = fb.group({
      correo: new FormControl('', [Validators.email]),
      contrasena: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  login(){
    this.loginService.login(this.formulario.value);
  }

}
