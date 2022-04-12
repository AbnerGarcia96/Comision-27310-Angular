import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from './models/persona';
import { RxjsService } from './services/rxjs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  personas$!: Observable<Persona[]>
  personasFiltradas$!: Observable<Persona[]>

  constructor(
    private rxjsService: RxjsService
  ){
    
  }

  ngOnInit(){
    this.personas$ = this.rxjsService.obtenerDatos();
    this.personasFiltradas$ = this.rxjsService.obtenerDatosFiltrados();
  }
}
