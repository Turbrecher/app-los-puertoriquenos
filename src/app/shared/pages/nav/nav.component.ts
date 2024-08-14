import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AdminService } from '../../../admin/admin.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.sass'
})
export class NavComponent {
  estaAutenticado: Boolean = false

  constructor(private cookieService: CookieService, private adminService: AdminService) {

  }

  logout(event: Event) {
    event.preventDefault()

    //Borramos el token
    this.cookieService.set('token', '', -1000)
    location.href = 'login'
  }

  ngOnInit() {
    let token = this.cookieService.get('token')
    this.adminService.profile(token)
      .subscribe({
        next: (response) => this.estaAutenticado = true,
        error: (error) => this.estaAutenticado = false
      })

  }
}
