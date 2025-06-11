import { Component } from '@angular/core';
import { Producto } from '../../../../models/producto';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
   // PROPIEDAD PÚBLICA (TIPO: ARRAY)
   public info: Producto[];
  
   constructor(){
     this.info = [
       {
         id: "",
         nombre: "Hamburguesa",
         precio: 200,
         descripcion: "",
         categoria: "Hamburguesas",
         imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/NCI_Visuals_Food_Hamburger.jpg/1024px-NCI_Visuals_Food_Hamburger.jpg",
         alt: "Hamburguesa"
       },
       {
         id: "",
         nombre: "Hamburguesa",
         precio: 200,
         descripcion: "",
         categoria: "Hamburguesas",
         imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/NCI_Visuals_Food_Hamburger.jpg/1024px-NCI_Visuals_Food_Hamburger.jpg",
         alt: "Hamburguesa"
       },
       {
         id: "",
         nombre: "Hamburguesa",
         precio: 200,
         descripcion: "",
         categoria: "Hamburguesas",
         imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/NCI_Visuals_Food_Hamburger.jpg/1024px-NCI_Visuals_Food_Hamburger.jpg",
         alt: "Hamburguesa"
       }
     ]
   }
}
