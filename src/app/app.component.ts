import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JugadoresModule } from './jugadores/jugadores.module';
import { TorneosModule } from './torneos/torneos.module';
import { PartidasModule } from './partidas/partidas.module';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JugadoresModule, TorneosModule, PartidasModule, SharedModule, HeaderComponent, NavComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'app-los-puertoriquenos';
}
