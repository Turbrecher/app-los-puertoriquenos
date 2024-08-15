import { Component } from '@angular/core';
import { Torneo } from '../../../shared/models/torneo';
import { PuntuacionesService } from '../../puntuaciones.service';
import { TarjetaTorneoComponent } from '../../components/tarjeta-torneo/tarjeta-torneo.component';


@Component({
  selector: 'app-torneos-list',
  standalone: true,
  imports: [TarjetaTorneoComponent],
  templateUrl: './torneos-list.component.html',
  styleUrl: './torneos-list.component.sass'
})
export class TorneosListComponent {
  torneos: Array<Torneo> = []

  constructor(public puntuacionesService: PuntuacionesService) {

  }

  ngOnInit() {
    //Obtenemos los torneos a través del servicio de puntuaciones.
    this.puntuacionesService.getTorneos()
      .subscribe((torneos) => {
        torneos.forEach((torneo) => {

          //Reemplazamos la id de usuario con su username
          this.puntuacionesService.getUsername(Number(torneo.usuario))
            .subscribe((usuario) => {
              torneo.usuario = usuario.usuario
            })


          this.torneos.push(torneo)
        })
      })
  }
}
