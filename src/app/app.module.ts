import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './Components/principal/app.component';
import { UserComponent } from './Components/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


//import { HeaderComponent } from './Components/header/header.component';import { Usuario } from './Components/others/interface';
