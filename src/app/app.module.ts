// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PedirComidaModule } from './modules/pedir-comida/pedir-comida.module';

@NgModule({
  imports: [
    BrowserModule,            // Necesario para aplicaciones web
    BrowserAnimationsModule,
    AppComponent,   // Necesario para Angular Material
    PedirComidaModule         // Importás tu módulo feature aquí
  ],
  providers: []  // Arranca la app con AppComponent
})
export class AppModule { }
