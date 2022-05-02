import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { cargarCursos, cursosCargados } from 'src/app/state/actions/curso.action';
import { selectorCargandoCursos, selectorListaCursos } from 'src/app/state/selectors/curso.selector';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  cargando$!: Observable<boolean>;

  constructor(
    private store: Store<any>,
    private cursoService: CursoService 
  ) { }

  ngOnInit(): void {
    this.store.dispatch(cargarCursos());
    this.cursoService.obtenerCursos().subscribe((cursos: Curso[]) => {
      this.store.dispatch(cursosCargados({cursos: cursos}));
    });
    this.cargando$ = this.store.select(selectorCargandoCursos);
  }

}
