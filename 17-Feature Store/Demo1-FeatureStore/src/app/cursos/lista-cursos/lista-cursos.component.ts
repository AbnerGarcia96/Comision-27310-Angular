import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { cerrarSesion } from 'src/app/auth/state/auth.actions';
import { selectorUsuarioActivo } from 'src/app/auth/state/auth.selectors';
import { Curso } from 'src/app/models/curso.model';
import { Usuario } from 'src/app/models/usuario.model';
import { CursoService } from '../curso.service';
import { cargarCursos, cursosCargados } from '../state/curso.actions';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {
  cursos!: Curso[];
  usuarioActivo!: Usuario;

  constructor(
    private cursoService: CursoService,
    private store: Store,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.store.dispatch(cargarCursos());
    this.cursoService.obtenerCursos().subscribe((cursos: Curso[]) => {
      this.cursos = cursos;
      this.store.dispatch(cursosCargados({cursos}));
    });
    this.store.select(selectorUsuarioActivo).subscribe((usuario) => {
      this.usuarioActivo = usuario.usaurioActivo;
    });
  }

  logout(){
    this.store.dispatch(cerrarSesion());
    this.router.navigate(['auth', 'login']);
  }

}
