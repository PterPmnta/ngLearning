import { Component, OnInit } from '@angular/core';
import { Usuario } from '../others/interface';
import { UserService } from '../../services/user.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private apiService: ApiService) { }

  usuario: string;
  password: string;

  ngOnInit() {
  }

  login() {

    this.usuario = (document.querySelector('#user') as HTMLInputElement).value;
    this.password = (document.querySelector('#password') as HTMLInputElement).value;

    this.apiService.login(this.usuario, this.password).subscribe(Response => {

      if (Response.succes) {
        this.userService.user = Response.user;
        console.log(this.userService.user);
      }

    });

  }

  prueba() {

    this.apiService.peticion().subscribe(Response => {

      console.log(Response);

      if (Response.succes) {
        this.userService.user = Response.user;
        console.log(this.userService.user);
      }

    });
  }

}
