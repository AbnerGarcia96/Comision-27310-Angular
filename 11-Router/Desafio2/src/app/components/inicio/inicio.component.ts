import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(
    private router: Router
  ){

  }
  ngOnInit(): void {
    
  }

  irUsuario(){
    let nombre = "Abner";
    let apellido = "Garcia";
    let id = 1;

    this.router.navigate(['usuario', nombre, apellido, {id: id}]);
  }

}
