import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { selectorSesionActiva } from 'src/app/state/selectors/login.selector';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  sesion$!: Observable<any>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.sesion$ = this.store.select(selectorSesionActiva);
  }

}
