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
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    
  }

  eliminarCurso(id: number){
  }

  abrirCursoDialog(curso: any){
    
  }

}
