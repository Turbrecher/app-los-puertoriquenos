import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.sass'
})
export class AdminPageComponent {

  constructor(private cookieService: CookieService, private router: Router, private adminService: AdminService) {

  }


  ngOnInit() {
    if (!this.cookieService.get('token')) {
      this.router.navigate(["login"])
    }

    let token = this.cookieService.get('token')
    console.log(token)

    this.adminService.profile(token)
      .subscribe({

        //En caso de exito.
        next: () => { },

        //En caso de error
        error: () => {
          alert("El usuario autenticado no es administrador, así que no puede acceder a este recurso")
          this.router.navigate(['tournaments'])
        }
      })
  }
}
