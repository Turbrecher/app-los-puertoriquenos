import { Component, Input } from '@angular/core';
import { Torneo } from '../../../../shared/models/torneo';
import { RouterLink } from '@angular/router';
import { AdminService } from '../../../admin.service';

@Component({
  selector: 'app-tarjeta-partida',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tarjeta-partida.component.html',
  styleUrl: './tarjeta-partida.component.sass'
})
export class TarjetaPartidaComponent {
  
  @Input() nombre: String = "Partida por defecto"
  @Input() id: Number = 1
  @Input() fecha: String = '25-04-2002'
  @Input() torneo: Torneo = {
    id: 1,
    nombre: "Torneo por defecto",
    fechaInicio: "25-04-2002",
    fechaFinal: "25-04-2024"
  }

  constructor(private adminService:AdminService){

  }


  deletePartida(id:Number){
    if(confirm("¿Estas seguro?")){
      this.adminService.deletePartida(id)
    }
  }


}
