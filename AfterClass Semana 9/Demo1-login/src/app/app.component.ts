import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from './core/autenticacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo1-login';
  sesionActiva!: any;

  constructor(
    private auth: AutenticacionService,
    private router: Router
  ){
    this.sesionActiva = JSON.parse(localStorage.getItem('sesion') || '{}');
  }

  logout(){
    this.auth.logout();
    this.router.navigate(['autenticacion','login']);

  }
}
