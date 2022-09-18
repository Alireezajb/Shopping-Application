import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs';
import { CartService } from 'src/app/Service/cart.service';
import { WishListService } from 'src/app/Service/wish-list.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {


  number: number = 0;

  public wishList: any = [];
  constructor(private _wishListService: WishListService, private _cartService: CartService) { }

  ngOnInit(): void {
    this._wishListService.getWishList().subscribe(res => {
      this.wishList = res;

      const count: any = {};
      this.wishList.forEach((a: any) => {
        count[a.title] = (count[a.title] || 0) + 1;
        Object.assign(a, { index: this.number, total: a.price });
        this.number++;
        // a.quantity = 1;
      });

      console.log(this.wishList);
      // console.log(count);

    })
  }
  relmoveItem(i: any) {
    this._wishListService.removeItemWishList(i)
  }
  removeWishList() {
    this._wishListService.removeWishList();
  }
  addWishToCart() {
    this._cartService.addWishToCart(this.wishList);
    this.wishList = [];
    this._wishListService.removeWishList();
  }

}
