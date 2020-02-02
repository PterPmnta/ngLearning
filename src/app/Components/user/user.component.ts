import { Component, Input, Output, EventEmitter, Host } from '@angular/core';
import { Usuario } from '../others/interface';
import { AppComponent } from '../principal/app.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent {

  @Input('data') user: any;

  // @Output() borrar = new EventEmitter<number>();

  constructor(@Host() private app: AppComponent) {}

  BorrarUsuario(id: number) {
    // this.borrar.emit(id);
    this.app.users = this.app.users.filter(user => {
      return user.id !== id;
    });
  }

  /*isLogged: boolean = false;
  nivel: number = 5;*/

}
