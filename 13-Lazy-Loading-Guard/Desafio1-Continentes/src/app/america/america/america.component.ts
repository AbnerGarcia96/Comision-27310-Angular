import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-america',
  templateUrl: './america.component.html',
  styleUrls: ['./america.component.css']
})
export class AmericaComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
