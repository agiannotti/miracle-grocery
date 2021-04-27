import { AngularFireAuth } from '@angular/fire/auth';
import { Component } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  login() {}
}
