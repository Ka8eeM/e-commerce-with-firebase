import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import {  interval, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IUserInfo } from '../interfaces/UserInfo';
import { AuthService } from './auth.service';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private db: AngularFireDatabase,
    private authService: AuthService) {

  }


  get AppUser$(){

    return of(null);
  }
  // get AppUser$(): Observable<IUserInfo > {


  //   // return  this.authService.user$.pipe(
  //   //   switchMap((user) => {
  //   //     if (user)
  //   //       return this.getUser(user.uid).valueChanges();
  //   //     return of(null);
  //   //   })
  //   // );

  // }

  getUser(uid: string)  {
    return this.db.object('/users/' + uid);
  }
  save(user: any) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email,
    });
  }
}
