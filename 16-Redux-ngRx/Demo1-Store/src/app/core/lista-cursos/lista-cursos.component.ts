import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { AppState } from 'src/app/state/app.state';
import { selectorListaCursos } from 'src/app/state/selectors/curso.selector';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {
  cursos$!: Observable<Curso[]>;
  
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.cursos$ = this.store.select(selectorListaCursos);
  }

}
