import { Injectable } from '@angular/core';
import { Partida } from '../shared/models/partida';
import { Torneo } from '../shared/models/torneo';
import { Jugador } from '../shared/models/jugador';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { Usuario } from '../shared/models/Usuario';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private token: String = this.cookieService.get('token')
  private readonly ROOT_URL = 'https://app-los-puertoriquenos-api.onrender.com/api/'
  constructor(private httpClient: HttpClient, private router: Router, private cookieService: CookieService) { }

  //DETALLES
  //DETALLES
  //DETALLES
  //DETALLES

  //Método que obtiene una partida específica en forma de observable, que luego se procesa donde llega.
  getPartida(id: Number): Observable<Partida> {
    let headers = { "Authorization": "token " + this.token }

    return this.httpClient.get<Partida>(this.ROOT_URL + 'partidas/' + id)
  }

  //Método que obtiene una partida específica en forma de observable, que luego se procesa donde llega.
  getTorneo(id: Number): Observable<Torneo> {
    let headers = { "Authorization": "token " + this.token }

    return this.httpClient.get<Torneo>(this.ROOT_URL + 'torneos/' + id)
  }

  //Método que obtiene una partida específica en forma de observable, que luego se procesa donde llega.
  getJugador(id: Number): Observable<Jugador> {
    let headers = { "Authorization": "token " + this.token }
    console.log(this.token)
    console.log(this.ROOT_URL + 'jugadores/' + id)

    return this.httpClient.get<Jugador>(this.ROOT_URL + 'jugadores/' + id, {headers})
  }





  //LISTAR
  //LISTAR
  //LISTAR
  //LISTAR

  //Metodo que obtiene todas las partidas en un array.
  getPartidas(): Observable<Array<Partida>> {
    let headers = { "Authorization": "token " + this.token }

    return this.httpClient.get<Array<Partida>>(this.ROOT_URL + 'partidas', { headers })
  }

  //Metodo que obtiene todos los torneos en un array.
  getTorneos(): Observable<Array<Torneo>> {
    let headers = { "Authorization": "token " + this.token }

    return this.httpClient.get<Array<Torneo>>(this.ROOT_URL + 'torneos', { headers })
  }

  //Metodo que obtiene todos los jugadores en un array.
  getJugadores(): Observable<Array<Jugador>> {
    let headers = { "Authorization": "token " + this.token }

    return this.httpClient.get<Array<Jugador>>(this.ROOT_URL + 'jugadores', { headers })
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
  createPartida(partida: Partida): Observable<any> {
    let headers = { "Authorization": "token " + this.token }

    return this.httpClient.post<any>(this.ROOT_URL + 'partidas/', partida, { headers })
  }

  createJugada(idJugador: Number, idPartida: Number, puntuacion: Number): Observable<any> {

    let headers = { "Authorization": "token " + this.token }

    let jugada = {
      "jugador": idJugador,
      "partida": idPartida,
      "puntuacion": puntuacion
    }


    return this.httpClient.post<any>(this.ROOT_URL + 'jugadas/', jugada, { headers })
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


  deleteJugada(idJugada: Number): Observable<any> {
    let headers = { "Authorization": "token " + this.token }

    return this.httpClient.delete<any>(this.ROOT_URL + 'jugadas/' + idJugada, { headers })
  }





  //LOGIN
  //LOGIN
  //LOGIN
  //LOGIN


  login(usuario: Usuario) {
    return this.httpClient.post<any>(this.ROOT_URL + 'login', usuario)
  }

  register(usuario: Usuario) {
    return this.httpClient.post<any>(this.ROOT_URL + 'register', usuario)
  }

  profile() {
    let headers = { "Authorization": "token " + this.token }

    return this.httpClient.post<any>(this.ROOT_URL + 'profile', {}, { headers })
  }

  editProfile(usuario: Usuario) {
    let headers = { "Authorization": "token " + this.token }

    return this.httpClient.post<any>(this.ROOT_URL + 'editprofile', usuario, { headers })
  }

  deleteUser() {
    let headers = { "Authorization": "token " + this.token }

    return this.httpClient.delete<any>(this.ROOT_URL + 'deleteuser', { headers })
  }
}
