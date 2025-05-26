import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {

  constructor (private router: Router){
    this.router.events.subscribe(event =>{
      if(event instanceof NavigationEnd){
        switch (event.urlAfterRedirects){
          case "":
            this.seleccionado = [true,false,false];
            break;
          case "/pedir-comida":
            this.seleccionado = [false,true,false];
            break;
          case "perfil":
            this.seleccionado = [false,false,true];
            break;
          default:
            this.seleccionado = [false,false,false];
            break;
        }
      }
    })
  }

  seleccionado = [false,false,false]

  navegar(direccion:string) {
    this.router.navigate([direccion])
  }
}
