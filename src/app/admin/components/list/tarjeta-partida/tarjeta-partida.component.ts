import { Component, Input } from '@angular/core';
import { Torneo } from '../../../../shared/models/torneo';

@Component({
  selector: 'app-tarjeta-partida',
  standalone: true,
  imports: [],
  templateUrl: './tarjeta-partida.component.html',
  styleUrl: './tarjeta-partida.component.sass'
})
export class TarjetaPartidaComponent {
  
  @Input() nombre: String = "Partida por defecto"
  @Input() fecha: String = '25-04-2002'
  @Input() torneo: Torneo = {
    id: 1,
    nombre: "Torneo por defecto",
    fechaInicio: "25-04-2002",
    fechaFinal: "25-04-2024"
  }


}
