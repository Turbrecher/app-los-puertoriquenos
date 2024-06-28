import { Component } from '@angular/core';
import { FormCreatePartidaComponent } from '../../../components/create/form-create-partida/form-create-partida.component';
import { Torneo } from '../../../../shared/models/torneo';
import { AdminService } from '../../../admin.service';

@Component({
  selector: 'app-partidas-create',
  standalone: true,
  imports: [FormCreatePartidaComponent],
  templateUrl: './partidas-create.component.html',
  styleUrl: './partidas-create.component.sass'
})
export class PartidasCreateComponent {
  torneos: Array<Torneo> = []

  constructor(public adminService:AdminService){
  }

  ngOnInit(){
    this.torneos = this.adminService.getTorneos()
  }
}
