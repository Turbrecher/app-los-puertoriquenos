import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminService } from '../../../admin.service';
import { Jugador } from '../../../../shared/models/jugador';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-form-edit-jugador',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-edit-jugador.component.html',
  styleUrl: './form-edit-jugador.component.sass'
})
export class FormEditJugadorComponent {

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



  constructor(private fb: FormBuilder, public adminService: AdminService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id']
    let jugador: Observable<Jugador> = this.adminService.getJugador(id)
    
    jugador.subscribe((jugador) => {
      this.nombre.setValue(jugador.nombre)
      this.apellidos.setValue(jugador.apellidos)
      this.username.setValue(jugador.username)
    })


  }


  editarJugador() {
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
