import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tarjeta-partida',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tarjeta-partida.component.html',
  styleUrl: './tarjeta-partida.component.sass'
})
export class TarjetaPartidaComponent {
  @Input() nombre: String = ""
  @Input() fecha: String = ""
  @Input() id: Number = 0
  @Input() torneo: String = ""

  constructor() {

  }

  ngInit() {

  }
}
