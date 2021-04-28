import { UserService } from './shared/services/user.service';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private userService: UserService,
    private auth: AuthService,
    router: Router
  ) {
    // subscription is ok here without on destroy interface
    auth.user$.subscribe((user) => {
      if (!user) return;

      // we currently do not have registration to make .save more efficient
      // simply ensures up to date name is in DB
      userService.save(user);

      let returnUrl = localStorage.getItem('returnUrl');
      if (!returnUrl) return;

      localStorage.removeItem('returnUrl');
      router.navigateByUrl(returnUrl);
    });
  }
}
