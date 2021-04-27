import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component } from '@angular/core';
import 'firebase/auth';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private afAuth: AngularFireAuth) {}

  login() {}
}
