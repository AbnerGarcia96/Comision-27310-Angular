import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-contenido-dialogo',
  templateUrl: './contenido-dialogo.component.html',
  styleUrls: ['./contenido-dialogo.component.css']
})
export class ContenidoDialogoComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
  }

}
