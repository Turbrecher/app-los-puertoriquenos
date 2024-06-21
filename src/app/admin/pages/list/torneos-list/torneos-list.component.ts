import { Component } from '@angular/core';
import { TarjetaTorneoComponent } from '../../../components/list/tarjeta-torneo/tarjeta-torneo.component';
import { Torneo } from '../../../../shared/models/torneo';
import { AdminService } from '../../../admin.service';

@Component({
  selector: 'admin-torneos-list',
  standalone: true,
  imports: [TarjetaTorneoComponent],
  templateUrl: './torneos-list.component.html',
  styleUrl: './torneos-list.component.sass'
})
export class TorneosListComponent {
  torneos: Array<Torneo> = []

  constructor(public adminService: AdminService) {

  }

  ngOnInit(){
    this.torneos = this.adminService.getTorneos()
  }

}
