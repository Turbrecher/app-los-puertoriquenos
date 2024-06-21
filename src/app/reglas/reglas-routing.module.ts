import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReglasComponent } from './pages/reglas/reglas.component';

const routes: Routes = [
  {
    path: "rules", component: ReglasComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReglasRoutingModule { }
