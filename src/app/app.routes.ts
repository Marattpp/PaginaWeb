import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PedirComidaComponent } from './pages/pedir-comida/pedir-comida.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

export const routes: Routes = [
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "pedir-comida",
        component: PedirComidaComponent
    },
    {
        path: "perfil",
        component: PerfilComponent
    }
];
