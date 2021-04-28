import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../shared/services/auth-guard.service';
import { CheckOutComponent } from './../check-out/check-out.component';
import { HomeComponent } from './../home/home.component';
import { LoginComponent } from './../login/login.component';
import { MyOrdersComponent } from './../my-orders/my-orders.component';
import { OrderSuccessComponent } from './../order-success/order-success.component';
import { ProductsComponent } from './../products/products.component';
import { ShoppingCartComponent } from './../shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'login', component: LoginComponent },

  { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },
  { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard] },
  {
    path: 'order-success',
    component: OrderSuccessComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
