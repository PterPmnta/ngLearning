import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './Components/principal/app.component';
import { UserComponent } from './Components/user/user.component';
import {Parte5Component} from './Components/parte5/parte5.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {LoginComponent} from './Components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MiDirectivaDirective } from './directives/miDirectiva.directive';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    Parte5Component,
    LoginComponent,
    MiDirectivaDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
