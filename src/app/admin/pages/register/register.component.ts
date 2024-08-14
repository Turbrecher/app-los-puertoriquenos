import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../../admin.service';
import { Usuario } from '../../../shared/models/Usuario';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.sass'
})
export class RegisterComponent {


  formRegister: FormGroup = this.fb.group({
    "username": ["", [Validators.required]],
    "password": ["", [Validators.required]],
    "repeatPassword": ["", [Validators.required]],
  })

  errorLogin: String = ""
  tipoMensaje: String = "error"

  get username() {
    return this.formRegister.get("username") as FormControl
  }

  get password() {
    return this.formRegister.get("password") as FormControl
  }

  get repeatPassword() {
    return this.formRegister.get("repeatPassword") as FormControl
  }


  ngOnInit() {

  }

  constructor(private fb: FormBuilder, private adminService: AdminService, private cookieService: CookieService, private router: Router) {

  }


  register(event: Event) {
    event.preventDefault()

    if(this.password.value != this.repeatPassword.value){
      this.tipoMensaje = "error"
      this.errorLogin = "La contraseña y su repetición deben ser las mismas"

      return
    }


    let usuario: Usuario = {
      "username": this.username.value,
      "password": this.password.value

    }

    //Servicio de administrador que hace login.
    this.adminService.register(usuario)
      .subscribe({
        //En caso de exito.
        next:
          (response) => {
            console.log(response)
            this.cookieService.set('token', response.token)//Guardamos el token de usuario como cookie.
            this.tipoMensaje = "success"
            this.errorLogin = "Registro exitoso!."
            location.href = "admin"

          },
        //En caso de error.
        error:
          (error) => {
            this.cookieService.set('token', '', -1000)//Borramos cualquier token ante un fallo de login.
            this.tipoMensaje = "error"
            this.errorLogin = "El registro ha fallado, vuelve a intentarlo."
          },
      })

  }


}
