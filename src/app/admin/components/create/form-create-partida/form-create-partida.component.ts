import { Component, Input } from '@angular/core';
import { Torneo } from '../../../../shared/models/torneo';
import { FormControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Partida } from '../../../../shared/models/partida';
import { AdminService } from '../../../admin.service';
import { Jugador } from '../../../../shared/models/jugador';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-create-partida',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-create-partida.component.html',
  styleUrl: './form-create-partida.component.sass'
})
export class FormCreatePartidaComponent {
  @Input() torneos: Array<Torneo> = []
  nJugadores: Array<number> = []
  jugadoresYPuestos: Array<any> = []
  jugadoresDisponibles: Array<Jugador> = []
  idPartida: Number = 0
  partidaCreada: Boolean = false

  formPartida: FormGroup = this.fb.group({
    "nombre": ["", [Validators.required, Validators.pattern(/[A-Za-z]{1,30}/)]],
    "fecha": ["", [Validators.required]],
    "torneosSelect": ["", Validators.required],
    "nJugadoresSelect": ["", Validators.required],
    "participante1": [""],
    "participante2": [""],
    "participante3": [""],
    "participante4": [""],
    "participante5": [""],
    "participante6": [""],
    "puestoparticipante1": [""],
    "puestoparticipante2": [""],
    "puestoparticipante3": [""],
    "puestoparticipante4": [""],
    "puestoparticipante5": [""],
    "puestoparticipante6": [""],

  })

  get nombre() {
    return this.formPartida.get("nombre") as FormControl
  }

  get fecha() {
    return this.formPartida.get("fecha") as FormControl
  }

  get torneosSelect() {
    return this.formPartida.get("torneosSelect") as FormControl
  }

  get nJugadoresSelect() {
    return this.formPartida.get("nJugadoresSelect") as FormControl
  }

  establecerNumeroJugadores() {
    let arrayJugadores = []
    for (let index = 0; index < this.nJugadoresSelect.value; index++) {
      arrayJugadores.push(index)

    }
    this.nJugadores = arrayJugadores
  }

  //Método que se ejecuta al pulsar en el boton crear partida.
  async crearPartida() {

    if (this.nombre.invalid) {
      return
    }

    if (this.fecha.invalid) {
      return
    }

    if (this.torneosSelect.invalid) {
      return
    }

    //AGREGAMOS TODOS LOS JUGADORES QUE ESTAN APUNTADOS A UN ARRAY.
    for (let index = 0; index < this.nJugadores.length; index++) {
      let jugador = (this.formPartida.get("participante" + (index + 1)) as FormControl).value
      let puesto = (this.formPartida.get("puestoparticipante" + (index + 1)) as FormControl).value

      //COMPROBAMOS SI FALTA POR RELLENAR ALGUN JUGADOR.
      if (jugador == "") {
        alert("Debe insertar todos los jugadores que han jugado")
        this.jugadoresYPuestos = []
        return
      }

      this.jugadoresYPuestos.push({ "jugador": jugador, "puesto": puesto })
    }

    //COMPROBAMOS SI SE REPITEN JUGADORES, NO DEJANDO SEGUIR EN CASO AFIRMATIVO.
    if (this.seRepiteValor(this.jugadoresYPuestos)) {
      alert("No se pueden repetir jugadores")
      return
    }

    //CREAMOS LA PARTIDA CON LOS VALORES NUEVOS.
    let nombre = this.nombre.value
    let fecha = this.fecha.value
    let torneosSelect = this.torneosSelect.value
    let partida: Partida = { "id": 0, "nombre": nombre, "fecha": fecha, "torneo": torneosSelect }

    //Guardamos la id de la partida recien creada.
    this.adminService.createPartida(partida)
      .subscribe((response) => {
        this.idPartida = response.id_partida
      })


    this.partidaCreada = true//Esta variable, al activarse, desbloquea la opción de registrar las jugadas.

  }


  //Funcion que permite crear jugadas
  crearJugadas() {
    //POR CADA JUGADOR, AGREGAMOS SU PARTICIPACION


    this.jugadoresYPuestos.forEach((jugadorYPuesto) => {
      let puntuacionJugador = this.getPuntuacionPuesto(jugadorYPuesto.puesto, this.nJugadores.length)

      this.adminService.createJugada(jugadorYPuesto.jugador, this.idPartida, puntuacionJugador)
        .subscribe({
          next: () => { },
          error: () => { }
        })

    })


    this.router.navigate(["admin/listgames"])
  }


  constructor(private fb: FormBuilder, private adminService: AdminService, private router: Router) {

  }

  ngOnInit() {
    this.adminService.getJugadores().subscribe((jugadores) => {
      jugadores.forEach((jugador) => {
        this.jugadoresDisponibles.push(jugador)
      })
    })
  }


  //Funcion que devuelve la puntuacion en funcion del puesto y numero de jugadores:
  getPuntuacionPuesto(puesto: String, nJugadores: Number): number {
    let puntuacionMaxima = (this.jugadoresYPuestos.length * 2)
    let puntuacionJugador: number = 0

    switch (puesto) {
      case "1":
        puntuacionJugador = puntuacionMaxima + 1
        break
      case "2":
        puntuacionJugador = puntuacionMaxima - 2
        break
      case "3":
        puntuacionJugador = puntuacionMaxima - 4
        break
      case "4":
        puntuacionJugador = puntuacionMaxima - 6
        break
      case "5":
        puntuacionJugador = puntuacionMaxima - 8
        break
      case "6":
        puntuacionJugador = puntuacionMaxima - 10
        break
    }


    return puntuacionJugador;
  }


  //Funcion que comprueba si se repite algun valor de un array numerico
  seRepiteValor(array: Array<Number>): Boolean {
    let ocurrencias = 0
    let seRepite = false

    array.forEach((idJugador) => {
      array.forEach((idJugadorX) => {

        if (idJugador == idJugadorX) {
          ocurrencias++
        }

        if (ocurrencias > 1) {
          seRepite = true
        }

      })

      ocurrencias = 0
    })


    return seRepite
  }
}
