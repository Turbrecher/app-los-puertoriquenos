import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { PartidasCreateComponent } from './pages/create/partidas-create/partidas-create.component';
import { TorneosCreateComponent } from './pages/create/torneos-create/torneos-create.component';
import { JugadoresCreateComponent } from './pages/create/jugadores-create/jugadores-create.component';
import { JugadoresEditComponent } from './pages/edit/jugadores-edit/jugadores-edit.component';
import { TorneosEditComponent } from './pages/edit/torneos-edit/torneos-edit.component';
import { PartidasEditComponent } from './pages/edit/partidas-edit/partidas-edit.component';
import { PartidasListComponent } from './pages/list/partidas-list/partidas-list.component';
import { TorneosListComponent } from './pages/list/torneos-list/torneos-list.component';
import { JugadoresListComponent } from './pages/list/jugadores-list/jugadores-list.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [

  {
    path: "login", component: LoginComponent,
  },

  {
    path: "register", component: RegisterComponent,
  },

  {
    path: "profile", component: ProfileComponent,
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

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
