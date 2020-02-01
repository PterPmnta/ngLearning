import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parte5',
  templateUrl: './parte5.component.html',
  styleUrls: ['./parte5.component.css']
})
export class Parte5Component implements OnInit {

  constructor() { }

  desactivado = false;
  tipo = 'submit';
  titulo = '';
  titulo2 = '';
  titulo3 = '';
  seleccion = '';

  ngOnInit() {
  }

  alerta = () => {
    alert(this.titulo3);
  }

  log(e: string) {
    console.log(e);
  }

}
