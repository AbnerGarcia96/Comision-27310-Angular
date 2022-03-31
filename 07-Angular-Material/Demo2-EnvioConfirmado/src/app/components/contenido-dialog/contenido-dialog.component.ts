import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-contenido-dialog',
  templateUrl: './contenido-dialog.component.html',
  styleUrls: ['./contenido-dialog.component.css']
})
export class ContenidoDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
  }

}
