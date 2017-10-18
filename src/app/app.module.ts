import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CuestinoarioComponent } from './cuestinoario/cuestinoario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CuestinoarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/Inicio',
        pathMatch: 'full'
      },
      {
        path: 'Inicio',
        component: LoginComponent
      },
      {
        path: 'Cuestionario',
        component: CuestinoarioComponent
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
