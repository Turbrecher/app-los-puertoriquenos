import { Injectable } from '@angular/core';
import { Torneo } from '../shared/models/torneo';

@Injectable({
  providedIn: 'root'
})
export class PuntuacionesService {

  constructor() { }


  getTorneos() {
    let torneos : Array<Torneo> =
      [
        {
          id: 1,
          nombre: "Torneo Victor",
          fechaInicio:'2024-04-25',
          fechaFinal: '2025-04-25'
        },
        {
          id: 2,
          nombre: "Torneo Peteters",
          fechaInicio:'2024-08-15',
          fechaFinal: '2025-09-27'
        },
        {
          id: 3,
          nombre: "Torneo Galo",
          fechaInicio:'2024-08-05',
          fechaFinal: '2025-02-09'
        },
        {
          id: 4,
          nombre: "Torneo Pepa",
          fechaInicio:'2024-01-25',
          fechaFinal: '2025-01-25'
        },
      ]


      return torneos

  }
}
