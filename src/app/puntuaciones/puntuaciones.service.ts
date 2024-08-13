import { Injectable } from '@angular/core';
import { Torneo } from '../shared/models/torneo';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Partida } from '../shared/models/partida';
import { ObjetoPuntuacion } from '../shared/models/ObjetoPuntuacion';
import { Puntuacion } from '../shared/models/Puntuacion';

@Injectable({
  providedIn: 'root'
})
export class PuntuacionesService {

  private readonly ROOT_URL = 'http://localhost:8000/api/'
  constructor(private httpClient: HttpClient, private router: Router) {

  }


  //Metodo que devuelve un observable de la partida deseada.
  getTorneo(idTorneo: Number): Observable<Torneo> {

    return this.httpClient.get<Torneo>(this.ROOT_URL + "torneos/" + idTorneo)

  }

  //Metodo que devuelve un observable de la partida deseada.
  getPartida(idPartida: Number): Observable<Partida> {

    return this.httpClient.get<Partida>(this.ROOT_URL + "partidas/" + idPartida)

  }

  //Metodo que devuelve un observable de todos los torneos.
  getTorneos(): Observable<Array<Torneo>> {

    return this.httpClient.get<Array<Torneo>>(this.ROOT_URL + "torneos")

  }


  //Metodo que devuelve un observable de todas las partidas pertenecientes a un torneo.
  getPartidasTorneo(idTorneo: Number): Observable<Array<Partida>> {

    return this.httpClient.get<Array<Partida>>(this.ROOT_URL + "partidas/?torneo=" + idTorneo)

  }

  //Metodo que devuelve las puntuaciones en formato tabla (jugador -> puntuacion) de una partida.
  getPuntuacionesPartida(idPartida: Number): Observable<ObjetoPuntuacion> {
    return this.httpClient.get<ObjetoPuntuacion>(this.ROOT_URL + "puntuacionespartida/" + idPartida)
  }

  //Metodo que devuelve las puntuaciones en formato tabla (jugador -> puntuacion) de un torneo (suma de puntuaciones de las partidas del torneo).
  getPuntuacionesTorneo(idTorneo: Number): Observable<ObjetoPuntuacion> {
    return this.httpClient.get<ObjetoPuntuacion>(this.ROOT_URL + "puntuacionestorneo/" + idTorneo)
  }


}
