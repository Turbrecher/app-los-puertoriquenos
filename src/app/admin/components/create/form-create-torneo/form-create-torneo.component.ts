import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Torneo } from '../../../../shared/models/torneo';
import { AdminService } from '../../../admin.service';

@Component({
  selector: 'app-form-create-torneo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-create-torneo.component.html',
  styleUrl: './form-create-torneo.component.sass'
})
export class FormCreateTorneoComponent {

  formTorneo: FormGroup = this.fb.group({
    "nombre": ["", [Validators.required, Validators.pattern(/[a-zA-Z]{1,20}/)]],
    "fechaInicio": ["", Validators.required],
    "fechaFinal": ["", Validators.required],
  })

  get nombre(){
    return this.formTorneo.get("nombre") as FormControl
  }

  get fechaInicio(){
    return this.formTorneo.get("fechaInicio") as FormControl
  }

  get fechaFinal(){
    return this.formTorneo.get("fechaFinal") as FormControl
  }

  constructor(private fb: FormBuilder, private adminService:AdminService) {

  }

  crearTorneo(){

    if(this.nombre.invalid){return}
    if(this.fechaInicio.invalid){return}
    if(this.fechaFinal.invalid){return}

    //CREAMOS EL TORNEO CON LOS VALORES NUEVOS.
    let nombre = this.nombre.value
    let fechaInicio = this.fechaInicio.value
    let fechaFinal = this.fechaFinal.value
    let torneo:Torneo = {"id":0,"nombre": nombre, "fechaInicio":fechaInicio, "fechaFinal":fechaFinal}

    this.adminService.createTorneo(torneo)
  }
}
