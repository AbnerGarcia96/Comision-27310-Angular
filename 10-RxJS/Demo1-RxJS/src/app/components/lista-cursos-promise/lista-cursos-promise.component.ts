import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-cursos-promise',
  templateUrl: './lista-cursos-promise.component.html',
  styleUrls: ['./lista-cursos-promise.component.css']
})
export class ListaCursosPromiseComponent implements OnInit {
  cursos: any[] = [];

  constructor(
  ) { }

  ngOnInit(): void {
    
  }

}
