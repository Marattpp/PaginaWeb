import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//VISTAS PAGINA
import { PedirComidaComponent } from './pages/pedir-comida/pedir-comida.component';
// COMPONENTES LOCALES
import { CardComponent } from './components/card/card.component';
//MATERIAL
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


//Todo esto funciona, y permite que el card se vea. NO entiendo porque.
@NgModule({
  declarations: [
    CardComponent,
    PedirComidaComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    PedirComidaComponent,
    CardComponent
  ]
})
export class PedirComidaModule { }