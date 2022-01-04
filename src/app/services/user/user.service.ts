import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private db: AngularFireDatabase) {

  }



  // get AppUser$(): Observable<IUserInfo | any> {
  //   return this.authService.user$.pipe(
  //     switchMap((user) => {
  //       if (user)
  //         return this.getUser(user.uid).valueChanges();
  //       return of(null);
  //     })
  //   );
  // }


  


  getUser(uid: string) {
    return this.db.object('/users/' + uid);
  }
  save(user: any) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email,
    });
  }
}
