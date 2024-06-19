import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JugadoresModule } from './jugadores/jugadores.module';
import { TorneosModule } from './torneos/torneos.module';
import { PartidasModule } from './partidas/partidas.module';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JugadoresModule, TorneosModule, PartidasModule, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'app-los-puertoriquenos';
}
