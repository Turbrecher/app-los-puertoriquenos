import { Injectable } from '@angular/core';
import { Partida } from '../shared/models/partida';
import { Torneo } from '../shared/models/torneo';
import { Jugador } from '../shared/models/jugador';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private readonly ROOT_URL = 'http://localhost:8000/api/'
  constructor(private httpClient: HttpClient) { }


  //Método que obtiene una partida específica en forma de observable, que luego se procesa donde llega.
  getPartida(id: Number): Observable<Partida> {
    return this.httpClient.get<Partida>(this.ROOT_URL + 'partidas/' + id)
  }

  //Método que obtiene una partida específica en forma de observable, que luego se procesa donde llega.
  getTorneo(id: Number): Observable<Torneo> {
    return this.httpClient.get<Torneo>(this.ROOT_URL + 'torneos/' + id)
  }

  //Método que obtiene una partida específica en forma de observable, que luego se procesa donde llega.
  getJugador(id: Number): Observable<Jugador> {
    return this.httpClient.get<Jugador>(this.ROOT_URL + 'jugadores/' + id)
  }


  //Metodo que obtiene todas las partidas en un array.
  getPartidas(): Array<Partida> {
    let partidas: Array<Partida> = []

    this.httpClient.get<Array<Partida>>(this.ROOT_URL + 'partidas').subscribe((partidasBack) => {
      partidasBack.forEach((partida) => {
        partidas.push(partida)
      })
    })

    return partidas
  }

  //Metodo que obtiene todos los torneos en un array.
  getTorneos(): Array<Torneo> {

    let torneos: Array<Torneo> = []

    this.httpClient.get<Array<Torneo>>(this.ROOT_URL + 'torneos').subscribe((torneosBack) => {
      torneosBack.forEach((torneo) => {
        torneos.push(torneo)
      })
    })


    return torneos



  }

  //Metodo que obtiene todos los jugadores en un array.
  getJugadores(): Array<Jugador> {
    let jugadores: Array<Jugador> = []

    this.httpClient.get<Array<Jugador>>(this.ROOT_URL + 'jugadores').subscribe((jugadoresBack) => {
      jugadoresBack.forEach((jugador) => {
        jugadores.push(jugador)
      })
    })


    return jugadores
  }


  editPartida(partida: Partida): Boolean {
    console.log(partida)
    let headers = {"Authorization":"token e4cd442570e51923aca5a8fa7542b58f5f406e46"}

    this.httpClient.put<Partida>(this.ROOT_URL + 'partidas/' + partida.id, partida, {headers})
    .subscribe(()=>{
      alert("nice")
      alert("partida editada!")
    })

    return true
  }




}
