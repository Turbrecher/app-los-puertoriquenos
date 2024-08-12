import { Injectable } from '@angular/core';
import { Partida } from '../shared/models/partida';
import { Torneo } from '../shared/models/torneo';
import { Jugador } from '../shared/models/jugador';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs/internal/Subscription';
import { catchError } from 'rxjs';
import { RedirectCommand, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private token: String = "e4cd442570e51923aca5a8fa7542b58f5f406e46"
  private readonly ROOT_URL = 'http://localhost:8000/api/'
  constructor(private httpClient: HttpClient, private router: Router) { }

  //DETALLES
  //DETALLES
  //DETALLES
  //DETALLES

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





  //LISTAR
  //LISTAR
  //LISTAR
  //LISTAR

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

    this.httpClient.get<Array<Jugador>>(this.ROOT_URL + 'jugadores').
      subscribe((jugadoresBack) => {
        jugadoresBack.forEach((jugador) => {
          jugadores.push(jugador)
        })
      })


    return jugadores
  }





  //EDICION
  //EDICION
  //EDICION
  //EDICION

  //Metodo que edita una partida
  async editPartida(partida: Partida): Promise<Boolean> {
    let headers = { "Authorization": "token " + this.token }

    this.httpClient.put<Partida>(this.ROOT_URL + 'partidas/' + partida.id, partida, { headers })
      .subscribe(() => {

        this.router.navigate(["/admin/listgames"])

      })

    return true
  }

  async editTorneo(torneo: Torneo): Promise<Boolean> {
    let headers = { "Authorization": "token " + this.token }

    this.httpClient.put<Torneo>(this.ROOT_URL + 'torneos/' + torneo.id, torneo, { headers })
      .subscribe(() => {

        this.router.navigate(["/admin/listtournaments"])

      })

    return true
  }

  async editJugador(jugador: Jugador): Promise<Boolean> {
    let headers = { "Authorization": "token " + this.token }

    this.httpClient.put<Jugador>(this.ROOT_URL + 'jugadores/' + jugador.id, jugador, { headers })
      .subscribe(() => {

        this.router.navigate(["/admin/listplayers"])

      })

    return true
  }





  //CREACION
  //CREACION
  //CREACION
  //CREACION

  //Metodo que crea una partida
  createPartida(partida: Partida): Array<any> {
    let headers = { "Authorization": "token " + this.token }
    let respuesta: Array<Number> = []

    this.httpClient.post<any>(this.ROOT_URL + 'partidas/', partida, { headers })
      .subscribe((json) => {
        respuesta.push(json.id_partida)
      })
      return respuesta

  }

  //Metodo que crea un torneo
  async createTorneo(torneo: Torneo): Promise<Boolean> {
    let headers = { "Authorization": "token " + this.token }

    this.httpClient.post<Torneo>(this.ROOT_URL + 'torneos/', torneo, { headers })
      .subscribe(() => {

        this.router.navigate(["/admin/listtournaments"])

      })

    return true
  }

  //Metodo que crea un jugador
  createJugador(jugador: Jugador): Boolean {
    let headers = { "Authorization": "token " + this.token }

    this.httpClient.post<Jugador>(this.ROOT_URL + 'jugadores/', jugador, { headers })
      .subscribe(() => {

        this.router.navigate(["/admin/listplayers"])

      })

    return true
  }





  //BORRADO
  //BORRADO
  //BORRADO
  //BORRADO

  async deletePartida(id: Number): Promise<Boolean> {
    let headers = { "Authorization": "token " + this.token }

    this.httpClient.delete<Partida>(this.ROOT_URL + 'partidas/' + id, { headers })
      .subscribe(() => {

        this.router.navigate(["/admin/listgames"])
        location.reload()

      })


    return true
  }

  async deleteTorneo(id: Number): Promise<Boolean> {
    let headers = { "Authorization": "token " + this.token }

    this.httpClient.delete<Torneo>(this.ROOT_URL + 'torneos/' + id, { headers })
      .subscribe(() => {
        this.router.navigate(["/admin/listtournaments"])
        location.reload()

      })


    return true
  }

  async deleteJugador(id: Number): Promise<Boolean> {
    let headers = { "Authorization": "token " + this.token }

    this.httpClient.delete<Jugador>(this.ROOT_URL + 'jugadores/' + id, { headers })
      .subscribe(() => {

        this.router.navigate(["/admin/listplayers"])
        location.reload()

      })


    return true
  }

}
