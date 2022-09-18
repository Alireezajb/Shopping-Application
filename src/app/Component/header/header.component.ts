import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Service/cart.service';
import { WishListService } from 'src/app/Service/wish-list.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  public totalItem: number = 0;
  public totalWishlist: number = 0;
  public searchTerm: string = "";
  constructor(private cartService: CartService, private _wishListService: WishListService) { }

  ngOnInit(): void {
    this.cartService.getProduct().subscribe(res => {
      this.totalItem = res.length;
    })

    this._wishListService.getWishList().subscribe(res => {
      this.totalWishlist = res.length;
    })
  }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.cartService.Search.next(this.searchTerm);
    
  }

}
