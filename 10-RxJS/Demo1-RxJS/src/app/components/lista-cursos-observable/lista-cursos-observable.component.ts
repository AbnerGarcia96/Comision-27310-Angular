import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { RxjsService } from 'src/app/services/rxjs.service';
import { CursoDialogComponent } from '../curso-dialog/curso-dialog.component';

@Component({
  selector: 'app-lista-cursos-observable',
  templateUrl: './lista-cursos-observable.component.html',
  styleUrls: ['./lista-cursos-observable.component.css']
})
export class ListaCursosObservableComponent implements OnInit {
  cursos: any[] = [];
  
  constructor(
    public dialog: MatDialog,
    private rxjsService: RxjsService
  ) { }

  ngOnInit(): void {
    this.rxjsService.obtenerCursosObservable().subscribe({
      next: (cursos)=>{
        this.cursos = cursos;
      },
      error: (error) => {
        console.error("Ocurrio un error", error);
      }
    });
  }

  eliminarCurso(id: number){
    console.log("Eliminando curso ", id);
    this.rxjsService.eliminarCurso(id);
  }

  abrirCursoDialog(curso: any){
    const dialogRef = this.dialog.open(CursoDialogComponent, {
      width: '300px',
      data: curso
    });

    dialogRef.afterClosed().subscribe((data)=>{
      console.log(data);
      alert("Registro modificado exitosamente");
    })
  }

}
