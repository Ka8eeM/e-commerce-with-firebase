import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin/admin-orders/admin-orders.component';
import { ProductsComponent } from './components/products/products.component';
import { RouterModule } from '@angular/router';
import { ShoppingCardComponent } from './components/shopping-card/shopping-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
// import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { LoginComponent } from './components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { AdminManageUsersComponent } from './components/admin/admin-manage-users/admin-manage-users.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { AuthGuardService } from './services/guards/auth-guard.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { AdminAuthGuardService } from './services/guards/admin-auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductsComponent,
    ShoppingCardComponent,
    LoginComponent,
    CheckOutComponent,
    AdminManageUsersComponent,
    OrderSuccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [
    AuthGuardService,
    AuthService,
    UserService,
    AdminAuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
