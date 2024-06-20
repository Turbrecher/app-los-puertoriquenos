import { Component } from '@angular/core';
import { Torneo } from '../../../shared/models/torneo';
import { PuntuacionesService } from '../../puntuaciones.service';


@Component({
  selector: 'app-torneos-list',
  standalone: true,
  imports: [],
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
