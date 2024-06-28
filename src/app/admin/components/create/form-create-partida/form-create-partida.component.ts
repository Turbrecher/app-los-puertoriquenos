import { Component, Input } from '@angular/core';
import { Torneo } from '../../../../shared/models/torneo';
import { FormControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-create-partida',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-create-partida.component.html',
  styleUrl: './form-create-partida.component.sass'
})
export class FormCreatePartidaComponent {
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

  crearPartida(){
    
    if (this.nombre.invalid){
      return
    }

    if (this.fecha.invalid){
      return
    }

    if (this.torneosSelect.invalid){
      return
    }

    alert("Todo es válido")
  }


  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
  }
}
