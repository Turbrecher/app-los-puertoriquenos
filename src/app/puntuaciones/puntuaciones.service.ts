import { Injectable } from '@angular/core';
import { Torneo } from '../shared/models/torneo';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Partida } from '../shared/models/partida';

@Injectable({
  providedIn: 'root'
})
export class PuntuacionesService {

  private readonly ROOT_URL = 'http://localhost:8000/api/'
  constructor(private httpClient: HttpClient, private router: Router) {

  }


  getTorneos(): Observable<Array<Torneo>> {

    return this.httpClient.get<Array<Torneo>>(this.ROOT_URL + "torneos")

  }

  getPartidasTorneo(idTorneo: Number): Observable<Array<Partida>> {

    return this.httpClient.get<Array<Partida>>(this.ROOT_URL + "partidas/?torneo=" + idTorneo)

  }
}
