import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root',
})

// defining and extracting this auth service increases complexity, but improves testability of components and seperation of concerns
export class AuthService {
  user$: Observable<firebase.User>;
  // be aware we are leaking a sensitive property in our observable, and in a future implementation we need to extract a users component
  //
  constructor(private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState;
  }

  login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.signInWithRedirect(provider);
  }

  logout() {
    this.afAuth.signOut();
  }
}
