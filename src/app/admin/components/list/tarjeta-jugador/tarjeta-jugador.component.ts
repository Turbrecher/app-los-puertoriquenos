import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tarjeta-jugador',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tarjeta-jugador.component.html',
  styleUrl: './tarjeta-jugador.component.sass'
})
export class TarjetaJugadorComponent {
  @Input() nombre:String = "Nombre por defecto"
  @Input() apellidos:String = "Apellidos por defecto"
  @Input() username:String = "Username por defecto"
  @Input() id:Number = 1

  
}
