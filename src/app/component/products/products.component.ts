import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  
public productsList:any;       //// Declare a public variable named productsList of type any
 
  constructor(private api:ApiService,private cartservice:CartService){ }   //// Constructor that takes two dependencies: api (of type ApiService) and cartservice (of type CartService)

  ngOnInit(): void {
    this.api.getProduct()       //// Call the getProduct() method from the ApiService, which likely makes an API request to fetch product data

    .subscribe(res=>{
      this.productsList=res;    // // Assign the response data (res) to the productsList variable

      this.productsList.forEach((a:any) =>{
        Object.assign(a,{quentity:1,total:a.price})
      })

    })
  }
  
     //and then goto app rounting.module import cheyali and path evali products ki 


  addtocart(item:any){
    this.cartservice.addtocart(item);

  }
}
