import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminService } from '../../../admin.service';
import { Torneo } from '../../../../shared/models/torneo';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-form-edit-torneo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-edit-torneo.component.html',
  styleUrl: './form-edit-torneo.component.sass'
})
export class FormEditTorneoComponent {
  formTorneo: FormGroup = this.fb.group({
    "nombre": ["", [Validators.required, Validators.pattern(/[a-zA-Z]{1,20}/)]],
    "fechaInicio": ["", Validators.required],
    "fechaFinal": ["", Validators.required],
  })

  get nombre() {
    return this.formTorneo.get("nombre") as FormControl
  }

  get fechaInicio() {
    return this.formTorneo.get("fechaInicio") as FormControl
  }

  get fechaFinal() {
    return this.formTorneo.get("fechaFinal") as FormControl
  }

  constructor(private fb: FormBuilder, private adminService: AdminService, private activatedRoute:ActivatedRoute) {

  }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id']
    let torneo: Observable<Torneo> = this.adminService.getTorneo(id)

    torneo.subscribe((torneo) => {
      this.nombre.setValue(torneo.nombre)
      this.fechaInicio.setValue(torneo.fechaInicio)
      this.fechaFinal.setValue(torneo.fechaFinal)
    })
  }

  editarTorneo() {

    if (this.nombre.invalid) { return }
    if (this.fechaInicio.invalid) { return }
    if (this.fechaFinal.invalid) { return }

    alert("Torneo creado!")
  }
}
