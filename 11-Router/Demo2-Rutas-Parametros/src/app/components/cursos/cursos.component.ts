import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cursos!: any[];

  constructor(
    private rutaActiva: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.rutaActiva.paramMap.subscribe((parametros: ParamMap)=>{
      let _cursos: string | null = parametros.get('cursos');
      this.cursos = _cursos != null ? JSON.parse(_cursos) : [];
    })
  }

}
