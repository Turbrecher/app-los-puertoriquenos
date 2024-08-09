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
  @Output("recargarJugadores") recargarJugadores :EventEmitter<any> = new EventEmitter() 

  constructor(private adminService:AdminService){

  }

  recargar(){
    this.recargarJugadores.emit()
  }

  deleteJugador(id:Number){
    if(confirm("¿Estas seguro?")){
      this.adminService.deleteJugador(id)
    }
    
  }
}
