import { Routes } from '@angular/router';
import { TorneosListComponent } from './puntuaciones/pages/torneos-list/torneos-list.component';

//Rutas globales
export const routes: Routes = [

    {
        path: "",
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    },

    {
        path: "",
        loadChildren: () => import('./puntuaciones/puntuaciones.module').then(m => m.PuntuacionesModule)
    },

    {
        path: "",
        loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule)
    },

    
]