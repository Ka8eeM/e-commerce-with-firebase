import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Route, Router } from '@angular/router';


import firebase from 'firebase/compat/app';
import { interval, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // $ means that this valiable is an observable var
  user$: Observable<firebase.User | null | undefined>;

  constructor(
    private auth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router) {
    this.user$ = this.auth.authState;
  }


  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    //    this.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());

  }

  logout() {
    this.auth.signOut().then(() => {
      this.router.navigate(['/products']);
    });
  }
}
