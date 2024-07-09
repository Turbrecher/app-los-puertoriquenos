import { Component } from '@angular/core';
import { FormEditPartidaComponent } from '../../../components/edit/form-edit-partida/form-edit-partida.component';
import { Torneo } from '../../../../shared/models/torneo';
import { AdminService } from '../../../admin.service';

@Component({
  selector: 'app-partidas-edit',
  standalone: true,
  imports: [FormEditPartidaComponent],
  templateUrl: './partidas-edit.component.html',
  styleUrl: './partidas-edit.component.sass'
})
export class PartidasEditComponent {
  torneos: Array<Torneo> = []

  constructor(public adminService: AdminService) {
  }

  ngOnInit() {
    this.torneos = this.adminService.getTorneos()
  }
}
