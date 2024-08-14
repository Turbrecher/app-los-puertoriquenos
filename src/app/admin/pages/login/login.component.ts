import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../../admin.service';
import { Usuario } from '../../../shared/models/Usuario';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {

  formLogin: FormGroup = this.fb.group({
    "username": ["", [Validators.required]],
    "password": ["", [Validators.required]],
  })

  errorLogin: String = ""
  tipoMensaje: String = "error"

  get username() {
    return this.formLogin.get("username") as FormControl
  }

  get password() {
    return this.formLogin.get("password") as FormControl
  }


  ngOnInit() {

  }

  constructor(private fb: FormBuilder, private adminService: AdminService, private cookieService: CookieService, private router: Router) {

  }


  login(event: Event) {
    event.preventDefault()
    let usuario: Usuario = {
      "username": this.username.value,
      "password": this.password.value

    }

    //Servicio de administrador que hace login.
    this.adminService.login(usuario)
      .subscribe({
        //En caso de exito.
        next:
          (response) => {
            this.cookieService.set('token', response.token)//Guardamos el token de usuario como cookie.
            this.tipoMensaje = "success"
            this.errorLogin = "Inicio de sesión exitoso!."
            location.href = "admin"

          },
        //En caso de error.
        error:
          (error) => {
            this.cookieService.set('token', '', -1000)//Borramos cualquier token ante un fallo de login.
            this.tipoMensaje = "error"
            this.errorLogin = "El inicio de sesión ha fallado, vuelve a intentarlo."
          },
      })

  }



}
