import { Component } from '@angular/core';
import { AdminService } from '../../../admin.service';
import { Partida } from '../../../../shared/models/partida';
import { TarjetaPartidaComponent } from '../../../components/list/tarjeta-partida/tarjeta-partida.component';

@Component({
  selector: 'admin-partidas-list',
  standalone: true,
  imports: [TarjetaPartidaComponent],
  templateUrl: './partidas-list.component.html',
  styleUrl: './partidas-list.component.sass'
})
export class PartidasListComponent {
  partidas: Array<Partida> = []

  constructor(public adminService: AdminService) {

  }

  ngOnInit() {
    this.adminService.getPartidas()
      .subscribe((partidas) => {
        partidas.forEach((partida)=>{
          this.partidas.push(partida)
        })
      });
  }
}
