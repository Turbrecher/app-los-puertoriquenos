import { Component } from '@angular/core';
import { TarjetaPartidaComponent } from "../../../puntuaciones/components/tarjeta-partida/tarjeta-partida.component";
import { Partida } from '../../../shared/models/partida';
import { PuntuacionesService } from '../../puntuaciones.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-partidas-list',
  standalone: true,
  imports: [TarjetaPartidaComponent],
  templateUrl: './partidas-list.component.html',
  styleUrl: './partidas-list.component.sass'
})
export class PartidasListComponent {
  protected partidas: Array<Partida> = []
  protected idTorneo: Number = 0

  constructor(private puntuacionesService: PuntuacionesService, private activatedRoute: ActivatedRoute) {

  }


  ngOnInit() {

    this.idTorneo = this.activatedRoute.snapshot.params['id']


    this.puntuacionesService.getPartidasTorneo(this.idTorneo)
      .subscribe((partidas) => {
        partidas.forEach((partida) => {
          this.partidas.push(partida)
        })
      })
  }
}
