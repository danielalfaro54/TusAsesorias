import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  opcion: number = 2
  breakpoint;
  constructor() { }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth < 992) ? "barra-small" : "barra-normal";
  }

  change(n: number) {
    this.opcion = n
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth < 992) ? "barra-small" : "barra-normal";
  }

}
