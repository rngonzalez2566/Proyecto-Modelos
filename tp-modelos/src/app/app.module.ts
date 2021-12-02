import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CintaComponent } from './components/cinta/cinta.component';
import { BrazoComponent } from './components/brazo/brazo.component';
import { PrensaComponent } from './components/prensa/prensa.component';
import { MainComponent } from './components/main/main.component';
import {  HttpClientModule } from '@angular/common/http';
import { BultoComponent } from './components/bulto/bulto.component';
import { PilaComponent } from './pila/pila/pila.component';

@NgModule({
  declarations: [
    AppComponent,
    CintaComponent,
    BrazoComponent,
    PrensaComponent,
    MainComponent,
    BultoComponent,
    PilaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
