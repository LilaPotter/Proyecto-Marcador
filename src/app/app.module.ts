import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Marcador2Component } from './marcador2/marcador2.component';
import { EquipoComponent } from './equipo/equipo.component';
import { TopScoreComponent } from './top-score/top-score.component';


@NgModule({
  declarations: [
    AppComponent,
    Marcador2Component,
    EquipoComponent,
    TopScoreComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
