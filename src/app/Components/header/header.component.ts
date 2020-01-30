import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  // let nombre: string;

  constructor() {
    console.log(`Se esta cargando el componente Header`);
  }

  contador = 0;
  arr = [1, 2, 3, 4, 5, 6];

  ngOnInit() {
    console.log(`Se termino de cargar el componente Header`);
  }

  suma() {
    this.contador += 1;
  }

}
