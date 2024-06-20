import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';
import { ReglasComponent } from './reglas/pages/reglas/reglas.component';
import { TorneosListComponent } from './puntuaciones/pages/torneos-list/torneos-list.component';
import { PartidasCreateComponent } from './admin/pages/create/partidas-create/partidas-create.component';
import { TorneosCreateComponent } from './admin/pages/create/torneos-create/torneos-create.component';
import { JugadoresCreateComponent } from './admin/pages/create/jugadores-create/jugadores-create.component';

export const routes: Routes = [
    {
        path: "rules", component: ReglasComponent
    },
    {
        path: "tournaments", component: TorneosListComponent
    },
    {
        path: "creategame", component: PartidasCreateComponent
    },
    {
        path: "createtournament", component: TorneosCreateComponent
    },
    {
        path: "createplayer", component: JugadoresCreateComponent
    },
    {
        path: "**", component: PageNotFoundComponent
    },
    
];
