import { Component } from '@angular/core';
import { FormEditJugadorComponent } from '../../../components/edit/form-edit-jugador/form-edit-jugador.component';

@Component({
  selector: 'app-jugadores-edit',
  standalone: true,
  imports: [FormEditJugadorComponent],
  templateUrl: './jugadores-edit.component.html',
  styleUrl: './jugadores-edit.component.sass'
})
export class JugadoresEditComponent {

}
