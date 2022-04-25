import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditarCursoDialogComponent } from '../editar-curso-dialog/editar-curso-dialog.component';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {
  cursos!: any[];

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    
  }

  abrirDialogModificar(curso: any){
    this.dialog.open(EditarCursoDialogComponent, {
      width: '250px',
      data: curso,
    });
  }

  eliminarCurso(idCurso: string){
    
  }

}
