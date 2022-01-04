import { Component, OnInit } from '@angular/core';
import { IUserInfo } from 'src/app/interfaces/UserInfo';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  _appUser: IUserInfo | undefined;
  constructor(public service: AuthService) {
    this.service.AppUser$.subscribe((user) => {
      this._appUser = user;
    });
  }

  logout() {
    this.service.logout();
  }
}