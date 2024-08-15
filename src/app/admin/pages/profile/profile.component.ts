import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../../admin.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Usuario } from '../../../shared/models/Usuario';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.sass'
})
export class ProfileComponent {

  usuario: Usuario = { "username": "", "password": "" }

  formProfile: FormGroup = this.fb.group({
    "username": ["", [Validators.required]],
    "password": ["", []],
    "repeatPassword": ["", []],
    "email": ["", []]
  })

  mensaje: String = ""
  tipoMensaje: String = "error"

  get username(): FormControl {
    return this.formProfile.get("username") as FormControl
  }

  set username(val: String) {
    this.formProfile.get("username")?.setValue(val)
  }

  get password(): FormControl {
    return this.formProfile.get("password") as FormControl
  }

  set password(val: String) {
    this.formProfile.get("password")?.setValue(val)
  }

  get repeatPassword(): FormControl {
    return this.formProfile.get("repeatPassword") as FormControl
  }

  set repeatPassword(val: String) {
    this.formProfile.get("repeatPassword")?.setValue(val)
  }

  get email(): FormControl {
    return this.formProfile.get("email") as FormControl
  }

  set email(val: String) {
    this.formProfile.get("email")?.setValue(val)
  }


  ngOnInit() {
    let token = this.cookieService.get('token')
    if (!token) {
      this.router.navigate(['login'])
    }

    //Establecemos parametros del perfil en el formulario.
    this.adminService.profile()
      .subscribe((response) => {
        this.usuario = response.data
        this.username = response.data.username
        this.email = response.data.email
      })

  }

  constructor(private fb: FormBuilder, private adminService: AdminService, private cookieService: CookieService, private router: Router) {

  }

  async deleteUser(event: Event) {
    event.preventDefault()

    if (!confirm("¿Estás seguro de que quieres borrar tu usuario?")) {
      return
    }

    if (!confirm("¿Pero al 100% seguro?")) {
      return
    }

    if (!confirm("¡NO HAY MARCHA ATRÁS!")) {
      return
    }


    this.adminService.deleteUser()
      .subscribe({
        next: () => {
          this.cookieService.delete('token')
          location.href = ""
        },
        error: () => alert("Ha ocurrido un error, no se ha podido borrar el usuario.")
      })


  }


  async editProfile(event: Event) {
    event.preventDefault()

    if (this.password.value != this.repeatPassword.value) {
      this.tipoMensaje = "error"
      this.mensaje = "La contraseña y su repetición deben ser las mismas"

      return
    }


    let username = this.usuario.username
    let email = this.usuario.email
    let password = this.usuario.password

    //Comprobar si el email no esta vacio
    if (this.email.value != "") {
      email = this.email.value
    }

    //Comprobar si la contraseña no está vacía.
    if (this.password.value != "") {
      password = this.password.value
    }

    //Comprobar si el username no esta vacio
    if (this.username.value != "") {
      username = this.email.value
    }


    let usuario = {
      "username": this.username.value,
      "password": password,
      "email": email,

    }

    //Servicio de administrador que hace login.
    this.adminService.editProfile(usuario)
      .subscribe({
        //En caso de exito.
        next:
          (response) => {
            this.tipoMensaje = "success"
            this.mensaje = "Edición exitosa!."

            //Recargamos los datos de usuario
            this.adminService.profile().subscribe((response) => {
              this.usuario = response.data
              this.username = response.data.username
              this.email = response.data.email
              this.password = ""
              this.repeatPassword = ""
            })

          },
        //En caso de error.
        error:
          (error) => {
            this.tipoMensaje = "error"
            this.mensaje = "La edición ha fallado, vuelve a intentarlo."
          },
      })

  }




}
