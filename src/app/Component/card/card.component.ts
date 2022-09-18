import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Service/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  public products: any = [];
  public grandTotal !: number;
  public number: number = 0;

  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
    this._cartService.getProduct().subscribe(res => {
      this.products = res;
      this.products = this.squash(this.products);
      this.products.forEach((a: any) => {
        Object.assign(a, { index: this.number, total: (a.price * a.quantity) / a.quantity });
        this.number++;
      });

      this.grandTotal = this._cartService.getTotalPrice();
      console.log(this.products);
      let id = 0;
      this.products.forEach((item: any) => {

        // if (id === item.id) {
        //   console.log('duplicated');
        //   item.quantity + 2;
        //   console.log(item.quantity +2);
        //   this.products = this.squash(this.products);

        // }
        // else {
        //   id = item.id;
        // }

      })

    });

  }

  // removeItem(i: any) {
  //   this._cartService.removeCartItem(i);
  // }

  emptyCart() {
    this._cartService.removeAllCart();
  }
  minus(e: any) {
    e.quantity--;
  }

  squash(arr: any) {
    var UnRepeatedArray = [];
    for (var i = 0; i < arr.length; i++) {
      if (UnRepeatedArray.indexOf(arr[i]) == -1) {
        UnRepeatedArray.push(arr[i]);
      }
    }
    return UnRepeatedArray;
  }


}





// var hasDuplicates = function (arr:any) {
//   var obj:any = {};
//   for (var i = 0; i < arr.length; i++) {
//     if (obj[arr[i]])
//       return true;
//     obj[arr[i]] = 1;
//   }
//   return false;
// };

// console.log(hasDuplicates(this.products));