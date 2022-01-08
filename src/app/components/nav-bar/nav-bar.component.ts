import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCart } from 'src/app/interfaces/shpping-cart/ShoppingCart';
import { IUserInfo } from 'src/app/interfaces/UserInfo';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ShoppingCartService } from 'src/app/services/shopping-card/shopping-cart.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  _appUser: IUserInfo | undefined;
   cart$!: Observable<ShoppingCart>;

  constructor(public service: AuthService,
    private cartService: ShoppingCartService) {
    this.service.AppUser$.subscribe((user) => {
      this._appUser = user;
    });
  }
  async ngOnInit(): Promise<void> {
    this.cart$ =  (await this.cartService.getCart());
  }

  logout() {
    this.service.logout();
  }
}