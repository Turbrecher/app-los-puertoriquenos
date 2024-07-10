import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TorneosListComponent } from './pages/torneos-list/torneos-list.component';

const routes: Routes = [
  {
    path: "tournaments", component: TorneosListComponent
  }, 
  {
    path: "tournaments/:id", component: TorneosListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PuntuacionesRoutingModule { }
