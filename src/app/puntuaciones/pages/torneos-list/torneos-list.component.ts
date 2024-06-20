import { Component } from '@angular/core';
import { Torneo } from '../../../shared/models/torneo';
import { PuntuacionesService } from '../../puntuaciones.service';
import { TarjetaTorneoComponent } from '../../../shared/components/tarjeta-torneo/tarjeta-torneo.component';


@Component({
  selector: 'app-torneos-list',
  standalone: true,
  imports: [TarjetaTorneoComponent],
  templateUrl: './torneos-list.component.html',
  styleUrl: './torneos-list.component.sass'
})
export class TorneosListComponent {
  torneos:Array<Torneo> = []

  constructor(public puntuacionesService:PuntuacionesService){

  }

  ngOnInit(){
    this.torneos = this.puntuacionesService.getTorneos()
  }
}
