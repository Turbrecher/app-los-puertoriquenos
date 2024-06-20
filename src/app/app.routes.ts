import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';
import { ReglasComponent } from './reglas/pages/reglas/reglas.component';
import { TorneosListComponent } from './puntuaciones/pages/torneos-list/torneos-list.component';
import {  } from './admin/pages/list/torneos-list/torneos-list.component';
import { PartidasCreateComponent } from './admin/pages/create/partidas-create/partidas-create.component';
import { TorneosCreateComponent } from './admin/pages/create/torneos-create/torneos-create.component';
import { JugadoresCreateComponent } from './admin/pages/create/jugadores-create/jugadores-create.component';
import { AdminPageComponent } from './admin/pages/admin-page/admin-page.component';
import { PartidasEditComponent } from './admin/pages/edit/partidas-edit/partidas-edit.component';
import { TorneosEditComponent } from './admin/pages/edit/torneos-edit/torneos-edit.component';
import { JugadoresEditComponent } from './admin/pages/edit/jugadores-edit/jugadores-edit.component';
import { JugadoresListComponent } from './admin/pages/list/jugadores-list/jugadores-list.component';
import { PartidasListComponent } from './puntuaciones/pages/partidas-list/partidas-list.component';

export const routes: Routes = [
    {
        path: "rules", component: ReglasComponent
    },
    {
        path: "tournaments", component: TorneosListComponent
    },
    {
        path: "admin", component: AdminPageComponent, children:
            [
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
                    path: "editgame/:id", component: PartidasEditComponent
                },
                {
                    path: "edittournament/:id", component: TorneosEditComponent
                },
                {
                    path: "editplayer/:id", component: JugadoresEditComponent
                },
                {
                    path: "listgames", component: PartidasListComponent
                },
                {
                    path: "listtournaments", component: TorneosListComponent
                },
                {
                    path: "listplayers", component: JugadoresListComponent
                },
            ]
    },
    {
        path: "**", component: PageNotFoundComponent
    },

];
