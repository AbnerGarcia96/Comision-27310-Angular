import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { cargarCursos, cursosCargados } from 'src/app/state/actions/curso.action';
import { AppState } from 'src/app/state/app.state';
import { selectorCargandoCursos } from 'src/app/state/selectors/curso.selector';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  cargando$!: Observable<boolean>;

  constructor(
    private cursoService: CursoService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(cargarCursos());
    this.cargando$ = this.store.select(selectorCargandoCursos);
  }

}
