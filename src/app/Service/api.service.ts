import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }


  getProduct() {
    // return this._http.get<any>("http://fakestoreapi.com/products").pipe(map((response: any) => {
    //   return response;
    // }));

    return this._http.get<any>("http://fakestoreapi.com/products");
  }
}
