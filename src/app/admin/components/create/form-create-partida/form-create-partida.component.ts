import { Component, Input } from '@angular/core';
import { Torneo } from '../../../../shared/models/torneo';
import { FormControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Partida } from '../../../../shared/models/partida';
import { AdminService } from '../../../admin.service';
import { Jugador } from '../../../../shared/models/jugador';

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
  jugadores: Array<Jugador> = []

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
  crearPartida() {

    if (this.nombre.invalid) {
      return
    }

    if (this.fecha.invalid) {
      return
    }

    if (this.torneosSelect.invalid) {
      return
    }

    let jugadores: Array<Number> = []
    //AGREGAMOS TODOS LOS JUGADORES QUE ESTAN APUNTADOS A UN ARRAY.
    for (let index = 0; index < this.nJugadores.length; index++) {
      let jugador = (this.formPartida.get("participante" + (index + 1)) as FormControl).value

      //COMPROBAMOS SI FALTA POR RELLENAR ALGUN JUGADOR.
      if(jugador == "") {
        alert("Debe insertar todos los jugadores que han jugado")
        return 
      }

      jugadores.push(jugador)
    }

    //COMPROBAMOS SI SE REPITEN JUGADORES, NO DEJANDO SEGUIR EN CASO AFIRMATIVO.
    if(this.seRepiteValor(jugadores)){
      alert("No se pueden repetir jugadores")
      return
    }

    //CREAMOS LA PARTIDA CON LOS VALORES NUEVOS.
    let nombre = this.nombre.value
    let fecha = this.fecha.value
    let torneosSelect = this.torneosSelect
    let partida: Partida = { "id": 0, "nombre": nombre, "fecha": fecha, "torneo": torneosSelect.value }

    let json = this.adminService.createPartida(partida)

    //POR CADA JUGADOR, AGREGAMOS SU PARTICIPACION
    let puntuacionMaxima = jugadores.length
    let puntuacionJugador = puntuacionMaxima
    jugadores.forEach((idJugador)=>{

     
      puntuacionJugador--
    })
  }


  constructor(private fb: FormBuilder, private adminService: AdminService) {

  }

  ngOnInit() {
    this.jugadores = this.adminService.getJugadores()
  }


  //Funcion que comprueba si se repite algun valor de un array numerico
  seRepiteValor(array:Array<Number>):Boolean{
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
