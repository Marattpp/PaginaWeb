import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-pedir-comida',
  templateUrl: './pedir-comida.component.html',
  styleUrl: './pedir-comida.component.css'
})

export class PedirComidaComponent {
  tipoOpcion: 'individual' | 'combo' | null = null;

  seleccionarOpcion(opcion: 'individual' | 'combo'){
    this.tipoOpcion = opcion;
  }
}