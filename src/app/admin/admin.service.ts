import { Injectable } from '@angular/core';
import { Partida } from '../shared/models/partida';
import { Torneo } from '../shared/models/torneo';
import { Jugador } from '../shared/models/jugador';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }


  getPartida(id: Number): Partida {
    return {
      id: 1,
      nombre: "Partida guapa 1",
      fecha: "2024-04-25",
      torneo: {
        id: 1,
        nombre: "Torneo por defecto 1",
        fechaInicio: "2024-04-25",
        fechaFinal: "2024-04-25"

      }
    }
  }



  getPartidas(): Array<Partida> {
    return [

      {
        id: 1,
        nombre: "Partida guapa 1",
        fecha: "2024-04-25",
        torneo: {
          id: 1,
          nombre: "Torneo por defecto 1",
          fechaInicio: "2024-04-25",
          fechaFinal: "2024-04-25"

        }
      },

      {
        id: 2,
        nombre: "Partida guapa 2",
        fecha: "2024-04-25",
        torneo: {
          id: 1,
          nombre: "Torneo por defecto 2",
          fechaInicio: "2024-04-25",
          fechaFinal: "2024-04-25"

        }
      },

      {
        id: 3,
        nombre: "Partida guapa 3",
        fecha: "2024-04-25",
        torneo: {
          id: 1,
          nombre: "Torneo por defecto 3",
          fechaInicio: "2024-04-25",
          fechaFinal: "2024-04-25"

        }
      },

      {
        id: 4,
        nombre: "Partida guapa 4",
        fecha: "2024-04-25",
        torneo: {
          id: 1,
          nombre: "Torneo por defecto 4",
          fechaInicio: "2024-04-25",
          fechaFinal: "2024-04-25"

        }
      },

    ]
  }

  getTorneos(): Array<Torneo> {
    let torneos: Array<Torneo> =
      [
        {
          id: 1,
          nombre: "Torneo Victor",
          fechaInicio: '2024-04-25',
          fechaFinal: '2025-04-25'
        },
        {
          id: 2,
          nombre: "Torneo Peteters",
          fechaInicio: '2024-08-15',
          fechaFinal: '2025-09-27'
        },
        {
          id: 3,
          nombre: "Torneo Galo",
          fechaInicio: '2024-08-05',
          fechaFinal: '2025-02-09'
        },
        {
          id: 4,
          nombre: "Torneo Pepa",
          fechaInicio: '2024-01-25',
          fechaFinal: '2025-01-25'
        },
      ]


    return torneos



  }

  getTorneo(id: Number): Torneo {
    return {
      id: 1,
      nombre: "Torneo Victor",
      fechaInicio: '2024-04-25',
      fechaFinal: '2025-04-25'
    }
  }

  getJugadores(): Array<Jugador> {
    let jugadores: Array<Jugador> = [
      {
        id: 1,
        nombre: 'Vittorio',
        apellidos: 'Lucchino',
        username: 'turbrecher'
      },

      {
        id: 2,
        nombre: 'Alberto',
        apellidos: 'Coronel',
        username: 'hittox03'
      },

      {
        id: 3,
        nombre: 'Luis',
        apellidos: 'González',
        username: 'luisito'
      },
    ]

    return jugadores
  }

  getJugador(id: Number): Jugador {
    return {
      id: 1,
      nombre: "Mariangeles",
      apellidos: "Coronel Morgado",
      username: "Peteters"
    }
  }


}
