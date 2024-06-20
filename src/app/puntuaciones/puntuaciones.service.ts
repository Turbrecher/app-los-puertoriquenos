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
          fechaInicio: new Date('2024-04-25'),
          fechaFinal: new Date('2025-04-25')
        },
        {
          id: 2,
          nombre: "Torneo Peteters",
          fechaInicio: new Date('2024-08-15'),
          fechaFinal: new Date('2025-09-27')
        },
        {
          id: 3,
          nombre: "Torneo Galo",
          fechaInicio: new Date('2024-08-05'),
          fechaFinal: new Date('2025-02-09')
        },
        {
          id: 4,
          nombre: "Torneo Pepa",
          fechaInicio: new Date('2024-01-25'),
          fechaFinal: new Date('2025-01-25')
        },
      ]


      return torneos

  }
}
