import { Component, Input } from '@angular/core';
import { Torneo } from '../../../../shared/models/torneo';
import { RouterLink } from '@angular/router';
import { AdminService } from '../../../admin.service';

@Component({
  selector: 'app-tarjeta-torneo',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tarjeta-torneo.component.html',
  styleUrl: './tarjeta-torneo.component.sass'
})
export class TarjetaTorneoComponent {
  @Input() id: Number = 1
  @Input() nombre: String = ""
  @Input() fechaInicio: String = "1970-01-01"
  @Input() fechaFinal: String = "1970-01-01"

  constructor(private adminService: AdminService) {
  }

  deleteTorneo(id: Number) {
    if (confirm("¿Estás seguro?")) { 
      this.adminService.deleteTorneo(id) 
    }
  }

  ngOnInit() {

  }
}
