import { Routes } from '@angular/router';

//Rutas globales
export const routes: Routes = [
    {
        path: "",
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    },

    {
        path: "",
        loadChildren: () => import('./reglas/reglas.module').then(m => m.ReglasModule)
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