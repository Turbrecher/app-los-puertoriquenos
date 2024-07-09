import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Torneo } from '../../../../shared/models/torneo';
import { AdminService } from '../../../admin.service';

@Component({
  selector: 'app-form-edit-partida',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-edit-partida.component.html',
  styleUrl: './form-edit-partida.component.sass'
})
export class FormEditPartidaComponent {
  @Input() torneos: Array<Torneo> = []

  formPartida: FormGroup = this.fb.group({
    "nombre": ["", [Validators.required, Validators.pattern(/[A-Za-z]{1,30}/)]],
    "fecha": ["", [Validators.required]],
    "torneosSelect": ["", Validators.required],

  })

  get nombre() {
    return this.formPartida.get("nombre") as FormControl
  }

  get fecha() {
    return this.formPartida.get("fecha") as FormControl
  }

  get torneosSelect() {
    return this.formPartida.get("torneosSelect") as FormControl
  }

  editPartida() {

    if (this.nombre.invalid) {
      return
    }

    if (this.fecha.invalid) {
      return
    }

    if (this.torneosSelect.invalid) {
      return
    }

    alert("Todo es válido")
  }


  constructor(private fb: FormBuilder, private adminService:AdminService) {

  }

  ngOnInit() {
    let partida = this.adminService.getPartida(1)
    this.nombre.setValue(partida.nombre)
    this.fecha.setValue(partida.fecha)
    this.torneosSelect.setValue(partida.torneo.id)
  }
}
