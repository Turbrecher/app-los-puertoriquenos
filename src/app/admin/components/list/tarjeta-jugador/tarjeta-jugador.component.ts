import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-jugador',
  standalone: true,
  imports: [],
  templateUrl: './tarjeta-jugador.component.html',
  styleUrl: './tarjeta-jugador.component.sass'
})
export class TarjetaJugadorComponent {
  @Input() nombre:String = "Nombre por defecto"
  @Input() apellidos:String = "Apellidos por defecto"
  @Input() username:String = "Username por defecto"

  
}
