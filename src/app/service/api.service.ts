import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
//----That retrieves product data from an API using the http.get() method.
//  It makes a GET request to the URL and expects a response in the form of an any type. ----//
  getProduct(){
    return this.http.get<any>("https://fakestoreapi.com/products")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
// ------ and then goto products.component.ts import api service ------//