import { Component, OnInit } from '@angular/core';
import { Usuario, UserType } from '../others/interface';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  apiUrl = ' https://my-json-server.typicode.com/PterPmnta/demo/posts/';
  users: any = [];


  ngOnInit() {
    this.http.get(this.apiUrl).subscribe(datos => {
      this.users = datos;
    });
  }

  /*
  borrarUsuario(id: number) {
    this.users = this.users.filter(usuario => usuario.id !== id);
  }

  */

  /*

  title = 'ngLearning';

  user: Usuario = {
    Id: 12345,
    Nombre: 'Necro',
    Apellido: 'Mancer',
    Correo: 'mail@extension.com',
    Nick: 'Nick',
    Contraseña: '1254hgyet',
    Tipo: UserType.Tecnico
  };

  user_2: Usuario[] = [{
    Id: 254789,
    Nombre: 'Necro',
    Apellido: 'Mancer',
    Correo: 'mail@extension.com',
    Nick: 'Nick',
    Contraseña: '1254hki58t',
    Tipo: UserType.Administrador
  },
  {
    Id: 254541,
    Nombre: 'Necro',
    Apellido: 'Mancer',
    Correo: 'mail@extension.com',
    Nick: 'Nick',
    Contraseña: '1jud214g',
    Tipo: UserType.Cliente
  }];

  user_3: Usuario = {
    Id: 12345,
    Nombre: 'Necro',
    Apellido: 'Mancer',
    Correo: 'mail@extension.com',
    Nick: 'Nick',
    Contraseña: '1254hgyet',
    Tipo: UserType.Tecnico
  } as Usuario;

  mostrarDatos(): void {
    console.log(this.user_3.Id);
  }

  */

}
