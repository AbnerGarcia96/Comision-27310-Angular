import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Demo1';
  enlace = 'perfil'
  constructor(
    private router: Router
  ){}

  irCursos(){
    this.router.navigate(['curso']);
  }
}
