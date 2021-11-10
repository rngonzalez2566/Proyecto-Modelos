import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CintaComponent } from './components/cinta/cinta.component';
import { BrazoComponent } from './components/brazo/brazo.component';
import { PrensaComponent } from './components/prensa/prensa.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    CintaComponent,
    BrazoComponent,
    PrensaComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
