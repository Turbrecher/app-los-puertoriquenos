import { Component } from '@angular/core';
import { FormCreateTorneoComponent } from '../../../components/create/form-create-torneo/form-create-torneo.component';

@Component({
  selector: 'app-torneos-create',
  standalone: true,
  imports: [FormCreateTorneoComponent],
  templateUrl: './torneos-create.component.html',
  styleUrl: './torneos-create.component.sass'
})
export class TorneosCreateComponent {

}
