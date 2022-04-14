import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cursos = [
    {id: 1, nombre: "Angular", camada: "17030"},
    {id: 2, nombre: "Angular", camada: "17031"},
    {id: 3, nombre: "Angular", camada: "17032"},
  ]

  constructor(
    private router: Router
  ){
    
  }

  irCursos(){
    this.router.navigate(['cursos', {cursos: JSON.stringify(this.cursos)}]);
  }

}
