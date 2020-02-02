import { Injectable } from '@angular/core';
import {User} from '../Components/others/LoginResponse';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor() { }

  user: User;

}
