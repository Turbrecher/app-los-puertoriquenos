import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdminService } from '../../../admin.service';

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

  constructor(private adminService:AdminService){

  }

  deleteJugador(id:Number){
    if(confirm("¿Estas seguro?")){
      this.adminService.deleteJugador(id)
    }
    
  }
}
