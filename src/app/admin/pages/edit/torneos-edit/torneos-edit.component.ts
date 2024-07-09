import { Component } from '@angular/core';
import { FormEditTorneoComponent } from "../../../components/edit/form-edit-torneo/form-edit-torneo.component";

@Component({
    selector: 'app-torneos-edit',
    standalone: true,
    templateUrl: './torneos-edit.component.html',
    styleUrl: './torneos-edit.component.sass',
    imports: [FormEditTorneoComponent]
})
export class TorneosEditComponent {

}
