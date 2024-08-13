import { Component } from '@angular/core';
import { PuntuacionesService } from '../../puntuaciones.service';
import { ObjetoPuntuacion } from '../../../shared/models/ObjetoPuntuacion';
import { ActivatedRoute } from '@angular/router';
import { Puntuacion } from '../../../shared/models/Puntuacion';
import { Partida } from '../../../shared/models/partida';

@Component({
  selector: 'app-partidas-detail',
  standalone: true,
  imports: [],
  templateUrl: './partidas-detail.component.html',
  styleUrl: './partidas-detail.component.sass'
})
export class PartidasDetailComponent {
  partida: Partida = { id: 0, nombre: "", fecha: "", torneo: { "id": 0, "nombre": "", "fechaInicio": "", fechaFinal: "" } }
  idPartida: Number = 0
  puntuacionesPartida: Array<Puntuacion> = []


  constructor(private puntuacionesService: PuntuacionesService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    //Obtenemos la id de partida a traves de la URL.
    this.idPartida = this.activatedRoute.snapshot.params['id']


    this.puntuacionesService.getPuntuacionesPartida(this.idPartida)
      .subscribe((puntuaciones) => {
        //Guardamos todas las puntuaciones en un array..
        puntuaciones.data.forEach((puntuacion) => {
          this.puntuacionesPartida.push(puntuacion)
        })
      })


    //Asignamos la partida que buscamos a nuestro atributo partida.
    this.puntuacionesService.getPartida(this.idPartida)
      .subscribe((partida) => {
        this.partida = partida
      })





  }
}
