import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './shared/pages/header/header.component';
import { NavComponent } from './shared/pages/nav/nav.component';
import { FooterComponent } from './shared/pages/footer/footer.component';
import { ReglasModule } from './reglas/reglas.module';
import { AdminModule } from './admin/admin.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReglasModule, AdminModule, SharedModule, HeaderComponent, NavComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'app-los-puertoriquenos';
}
