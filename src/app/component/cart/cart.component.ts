import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {    
public product:any=[];             // Public variable 'product' initialized as an empty array to store products
public grandTotal:number=0         // Public variable 'grandTotal' initialized to 0 to store the total price
  products: any=[];       // Variable 'products' to store the products
  item: any;        // Variable 'item' to store a single item
  constructor(private cartservice:CartService) { }    // Variable 'products' to store the products
  
  ngOnInit(): void{       
    this.cartservice.getProducts() .subscribe(res=>{         /// Call the 'getProducts' method from CartService and subscribe to the response
      console.log(res)       //// Output the response to the console
      this.products=res;
      console.log(this.products)
   
    })
    this.grandTotal=this.cartservice.getTotalPrice();
  }
  removeItem(item:any){       //// Method to remove an item from the cart
    if(confirm('are you sure to delect?'))
    this.cartservice.removeCartItem(item);
    alert("item delect sucessfully")


  }
  emptycart(){       //// Method to remove all items from the cart
    this.cartservice.removeAllcart();
  }

  
}
