import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RxjsService } from 'src/app/services/rxjs.service';

@Component({
  selector: 'app-curso-dialog',
  templateUrl: './curso-dialog.component.html',
  styleUrls: ['./curso-dialog.component.css']
})
export class CursoDialogComponent implements OnInit {
  formulario!: FormGroup;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CursoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private rxjsService: RxjsService
  ) {
    this.formulario = this.fb.group({
      nombre: new FormControl(data.nombre),
      camada: new FormControl(data.camada)
    });
  }

  ngOnInit(): void {}

  actualizarCurso(){
    
  }

}
