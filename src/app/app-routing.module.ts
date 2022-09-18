import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './Component/card/card.component';
import { ProductComponent } from './Component/product/product.component';
import { WishListComponent } from './Component/wish-list/wish-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  { path: 'product', component: ProductComponent },
  { path: 'cart', component: CardComponent },
  { path: 'wishList', component: WishListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
