import { Component } from '@angular/core';
import { Jugador } from '../../../../shared/models/jugador';
import { AdminService } from '../../../admin.service';
import { TarjetaJugadorComponent } from '../../../components/list/tarjeta-jugador/tarjeta-jugador.component';

@Component({
  selector: 'admin-jugadores-list',
  standalone: true,
  imports: [TarjetaJugadorComponent],
  templateUrl: './jugadores-list.component.html',
  styleUrl: './jugadores-list.component.sass'
})
export class JugadoresListComponent {
  jugadores:Array<Jugador> = []

  constructor(public adminService: AdminService){

  }

  ngOnInit(){
    this.jugadores = this.adminService.getJugadores()
  }

  recargarJugadores(){
    alert("ejecutado")
    this.jugadores = this.adminService.getJugadores()
  }

}
