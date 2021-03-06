import { AppUser } from '../shared/models/app-user';
import { AuthService } from '../shared/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css'],
})
export class BsNavbarComponent {
  appUser: AppUser;
  constructor(private auth: AuthService) {
    auth.appUser$.subscribe((appUser) => (this.appUser = appUser));
  }

  logout() {
    this.auth.logout();
  }
}
