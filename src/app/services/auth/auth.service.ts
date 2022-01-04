import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Route, Router } from '@angular/router';


import firebase from 'firebase/compat/app';
import { interval, Observable, of, switchMap } from 'rxjs';
import { IUserInfo } from '../../interfaces/UserInfo';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // $ means that this valiable is an observable var
  user$: Observable<firebase.User | null | undefined>;

  constructor(
    private auth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) {
    this.user$ = this.auth.authState;
  }


  get AppUser$(): Observable<IUserInfo | any> {
    return this.user$.pipe(
      switchMap((user) => {
        if (user)
          return this.userService.getUser(user.uid).valueChanges();
        return of(null);
      })
    );
  }

  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    //this.auth.signInWithEmailAndPassword("karim136688@gmail.com", "ka123456789");
    //    this.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());

  }

  logout() {
    this.auth.signOut().then(() => {
      this.router.navigate(['/products']);
    });
  }
}
