import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {
  valor: number = 5;
  booleano: boolean = this.valor <= 5;
  docentes: any[] = [{
    nombre: "Abner",
    edad: 25
  },{
    nombre: "Jeremías",
    edad: 20
  }];
  urlImagen = "https://afa.com/Lionel_Messi.jpg";

  constructor() { }

  ngOnInit(): void {
  }

  hiceClick(valor: number){
    alert(valor);
    this.valor = 10;
  }

  getValor(){
    return this.valor;
  }

  ingresoMouse(){
    this.valor = Math.random()*10;
  }
}
