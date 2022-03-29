import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  personaModel: any = {
    nombre: '',
    apellido: '',
    edad: 0
  };
  
  constructor() {
  }

  ngOnInit(): void {
  }

  guardar(valorFormulario: any){
    console.log(valorFormulario);
  }

}
