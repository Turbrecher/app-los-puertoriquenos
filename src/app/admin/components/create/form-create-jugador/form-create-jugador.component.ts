import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-create-jugador',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-create-jugador.component.html',
  styleUrl: './form-create-jugador.component.sass'
})
export class FormCreateJugadorComponent {

  formJugador: FormGroup = this.fb.group({
    "nombre": ["", [Validators.required, Validators.pattern(/[A-Za-z]{1,30}/)]],
    "apellidos": ["", [Validators.required, Validators.pattern(/[A-Za-z]{1,30}.[A-Za-z]{1,30}/)]],
    "username": ["", [Validators.required, Validators.pattern(/[A-Za-z]{1,30}/),]]
  })

  get nombre() {
    return this.formJugador.get("nombre") as FormControl
  }

  get apellidos() {
    return this.formJugador.get("apellidos") as FormControl
  }

  get username() {
    return this.formJugador.get("username") as FormControl
  }

  constructor(private fb: FormBuilder) {

  }


  crearJugador() {
    if (this.nombre.invalid) {
      alert("Nombre invalido")
      return
    }

    if (this.apellidos.invalid) {
      alert("apellidos invalido")
      return
    }

    if (this.username.invalid) {
      alert("username invalido")
      return
    }


    alert("Todo va perfecto")
  }
}
