import { Component } from '@angular/core';
import { FormCreateJugadorComponent } from '../../../components/create/form-create-jugador/form-create-jugador.component';

@Component({
  selector: 'app-jugadores-create',
  standalone: true,
  imports: [FormCreateJugadorComponent],
  templateUrl: './jugadores-create.component.html',
  styleUrl: './jugadores-create.component.sass'
})
export class JugadoresCreateComponent {

}
