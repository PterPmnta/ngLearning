import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './Components/principal/app.component';
import { UserComponent } from './Components/user/user.component';
import {Parte5Component} from './Components/parte5/parte5.component';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './Components/login/login.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    Parte5Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
