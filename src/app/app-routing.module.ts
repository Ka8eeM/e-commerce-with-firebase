import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminOrdersComponent } from './components/admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCardComponent } from './components/shopping-card/shopping-card.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from './services/guards/auth-guard.service';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { AdminManageUsersComponent } from './components/admin/admin-manage-users/admin-manage-users.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { AdminAuthGuardService } from './services/guards/admin-auth-guard.service';

const routes: Routes =
  [
    { path: 'products', component: ProductsComponent, },
    { path: 'my-orders', component: MyOrdersComponent, canActivate: [AuthGuardService,] },
    { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService,] },
    { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
    { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
    { path: 'admin/users', component: AdminManageUsersComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
    { path: 'shopping-card', component: ShoppingCardComponent },
    { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuardService,] },
    { path: 'login', component: LoginComponent },
    { path: '**', component: ProductsComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
