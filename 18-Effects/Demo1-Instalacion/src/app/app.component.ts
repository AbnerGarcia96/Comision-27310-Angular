import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { cargarCursos } from './store/action/cursos.action';
import { CursoState } from './store/reducer/cursos.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Demo1-Instalacion';
  cursos$!: Observable<CursoState>;

  constructor(
    private store: Store<CursoState>
  ){}

  ngOnInit(): void {
    this.store.dispatch(cargarCursos());
  }
}
