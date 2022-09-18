import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishListService {


  public wishList: any = [];
  public productList = new BehaviorSubject<any>([]);
  constructor() { }


  getWishList() {
    return this.productList.asObservable();
  }

  addToWishList(product: any) {
    this.wishList.push(product);
    this.productList.next(this.wishList);
  }

  removeWishList() {
    this.wishList = [];
    this.productList.next(this.wishList);
  }
  removeItemWishList(product: any) {
    this.wishList.map((a: any, index: any) => {

      if (product.index === a.index) {
        this.wishList.splice(index, 1);
      }
    })
    this.productList.next(this.wishList);

  }


}
