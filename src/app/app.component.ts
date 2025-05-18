import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TabsComponent } from "./core/components/tabs/tabs.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, TabsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Fuentes-Marat-Raziel';
}