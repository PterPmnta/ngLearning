import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { LoginResponse } from '../Components/others/LoginResponse';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) {

  }

  api_url: string = 'hhtp://198.162.1.110';
  api_url_2: string = 'http://www.mocky.io/v2/5e3620663200008400ae3c25';

  login(user: string, password: string): Observable<LoginResponse> {

    password = btoa(password);

    return this.http.post<LoginResponse>(`${this.api_url}/auth/login`, {
      user: user,
      password: password
    });

  }

  peticion(): Observable<LoginResponse> {
    return this.http.put<LoginResponse>(`${this.api_url_2}`, {

    });
  }

}
