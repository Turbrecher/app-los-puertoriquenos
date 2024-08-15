import { Component } from '@angular/core';
import { Torneo } from '../../../shared/models/torneo';
import { Puntuacion } from '../../../shared/models/Puntuacion';
import { PuntuacionesService } from '../../puntuaciones.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-torneos-detail',
  standalone: true,
  imports: [],
  templateUrl: './torneos-detail.component.html',
  styleUrl: './torneos-detail.component.sass'
})
export class TorneosDetailComponent {

  torneo: Torneo = { "id": 0, "nombre": "", "fechaInicio": "", "fechaFinal": "", "usuario":""}
  idTorneo: Number = 0
  puntuacionesTorneo: Array<Puntuacion> = []


  constructor(private puntuacionesService: PuntuacionesService, private activatedRoute: ActivatedRoute) {

  }


  ngOnInit() {
    //Obtenemos la id de partida a traves de la URL.
    this.idTorneo = this.activatedRoute.snapshot.params['id']


    this.puntuacionesService.getPuntuacionesTorneo(this.idTorneo)
      .subscribe((puntuaciones) => {
        //Guardamos todas las puntuaciones en un array..
        puntuaciones.data.forEach((puntuacion) => {
          this.puntuacionesTorneo.push(puntuacion)
        })
      })


    //Asignamos el torneo que buscamos a nuestro atributo torneo.
    this.puntuacionesService.getTorneo(this.idTorneo)
      .subscribe((partida) => {
        this.torneo = partida
      })





  }

}
