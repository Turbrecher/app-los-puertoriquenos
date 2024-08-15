import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TorneosListComponent } from './pages/torneos-list/torneos-list.component';
import { PartidasListComponent } from './pages/partidas-list/partidas-list.component';
import { PartidasDetailComponent } from './pages/partidas-detail/partidas-detail.component';
import { TorneosDetailComponent } from './pages/torneos-detail/torneos-detail.component';

const routes: Routes = [
  
  {
    path: "tournaments", component: TorneosListComponent
  }, 

  {
    path: "tournaments/:id/partidas", component: PartidasListComponent
  },

  {
    path: "tournaments/:id/puntuaciones", component: TorneosDetailComponent
  },

  {
    path: "games/:id/puntuaciones", component: PartidasDetailComponent
  },

 
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PuntuacionesRoutingModule { }
