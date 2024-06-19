import { Routes } from '@angular/router';
import { JugadoresCreateComponent } from './jugadores/components/jugadores-create/jugadores-create.component';
import { RulesComponent } from './shared/components/rules/rules.component';
import { TorneosListComponent } from './torneos/components/torneos-list/torneos-list.component';
import { PartidasCreateComponent } from './partidas/components/partidas-create/partidas-create.component';
import { TorneosCreateComponent } from './torneos/components/torneos-create/torneos-create.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: "rules", component: RulesComponent
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
        path: "**", component: PageNotFoundComponent
    },
    
];
