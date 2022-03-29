import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/clases/persona';

@Component({
  selector: 'app-formulario-template',
  templateUrl: './formulario-template.component.html',
  styleUrls: ['./formulario-template.component.css']
})
export class FormularioTemplateComponent implements OnInit {
  persona: Persona = new Persona('', '', 0);
  listaPersonas: Persona[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

  guardarPersona(){
    let p = this.persona;
    this.listaPersonas.push(p);
    this.persona = new Persona('', '', 0);
  }

}
