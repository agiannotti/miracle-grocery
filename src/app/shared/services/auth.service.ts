import { AppUser } from '../models/app-user';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { switchMap } from 'rxjs/operators';
import 'firebase/auth';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})

// defining and extracting this auth service increases complexity, but improves testability of components and seperation of concerns
export class AuthService {
  user$: Observable<firebase.User>;
  // be aware we are leaking a sensitive property in our observable, and in a future implementation we need to extract a users component
  //
  constructor(
    private userService: UserService,
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute
  ) {
    this.user$ = afAuth.authState;
  }

  login() {
    // we want users not logged in to be redirected to desired page upon login
    // use queryParam map to grab returnUrl and set it to localStorage
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.signInWithRedirect(provider);
  }

  logout() {
    this.afAuth.signOut();
  }

  get appUser$(): Observable<AppUser> {
    return this.user$.pipe(
      switchMap((user) => {
        if (user) return this.userService.get(user.uid).valueChanges();

        return of(null);
      })
    );
  }
}
