import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { PedirComidaComponent } from './modules/pedir-comida/pages/pedir-comida/pedir-comida.component';
import { PerfilComponent } from './modules/perfil/pages/perfil/perfil.component';
import { InicioSesionComponent } from './modules/autentificacion/pages/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './modules/autentificacion/pages/registro/registro.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "pedir-comida",
        component: PedirComidaComponent
    },
    {
        path: "perfil",
        component: PerfilComponent
    },
    {
        path: "inicio-sesion",
        component: InicioSesionComponent
    },
    {
        path: "registro",
        component: RegistroComponent
    }
];
