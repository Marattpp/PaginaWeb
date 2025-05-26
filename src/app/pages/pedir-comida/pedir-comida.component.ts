import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pedir-comida',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pedir-comida.component.html',
  styleUrl: './pedir-comida.component.css'
})
export class PedirComidaComponent {
  tipoOpcion: 'individual' | 'combo' | null = null;

  seleccionarOpcion(opcion: 'individual' | 'combo'){
    this.tipoOpcion = opcion;
  }
}
