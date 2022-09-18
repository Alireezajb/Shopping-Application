import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Service/cart.service';
import { WishListService } from 'src/app/Service/wish-list.service';
import { ApiService } from './../../Service/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public productList: any;
  public filerCategory: any;
  public searchKey: string = '';

  constructor(private _service: ApiService, private cartService: CartService, private _wishListService: WishListService) { }

  ngOnInit(): void {
    this._service.getProduct().subscribe(res => {
      this.productList = res;
      this.filerCategory = res;
      console.table(this.productList)
      this.productList.forEach((a: any) => {
        if (a.category === "women's clothing" || a.category === "men's clothing") {
          a.category = "fashion"
        }
        Object.assign(a, { quantity: 0 });
      });
    });


    this.cartService.Search.subscribe(value => {
      this.searchKey = value;
    })



  }

  addToCart(items: any, event: any) {
    this.cartService.addToCart(items);
    // event.target.disabled = true;
    items.quantity++
    // items.total= items.total * items.quantity;
    // console.log(items.quantity,"\n",items.total);


  }

  addToWishList(items: any, event: any) {
    this._wishListService.addToWishList(items);
    event.target.disabled = true;

  }

  filter(category: string) {
    this.filerCategory = this.productList.filter((a: any) => {
      if (a.category == category || category == '') {
        return a;
      }
    })
  }

}
