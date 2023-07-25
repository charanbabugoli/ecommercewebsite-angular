import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
public cartItemList:any=[]           // Declare an array to store the items in the cart
public productList = new BehaviorSubject<any>([]);  // Create a BehaviorSubject to hold the product list
  constructor() { }
  getProducts(){
    return this.productList.asObservable();       // Return the product list as an Observable
  }
  getProduct(product:any){
    this.cartItemList.push(...product);   // Add the product(s) to the cartItemList array using the spread operator
    this.productList.next(product);    // Update the product list in the BehaviorSubject with the new product(s)
  }
  addtocart(product:any){                 
    this.cartItemList.push(product);            // Add the product to the cartItemList array
    this.productList.next(this.cartItemList);        // Update the product list in the BehaviorSubject with the updated cartItemList
    this.getTotalPrice();       // Calculate and display the total price of the items in the cart        
    console.log(this.cartItemList)
  }
  getTotalPrice(){
    let grandTotal=0;             // Initialize the grandTotal variable to 0
    this.cartItemList.map((a:any)=>{
      grandTotal +=a.total;       // Add the total price of the current item to the grandTotal
    })
    return grandTotal
  }

  removeCartItem(product:any){        // Method to remove a specific item from the cart
    this.cartItemList.map((a:any, index:any)=>{   // Iterate over each item in the "cartItemList" array
      if(product.id ===a.id)               // Check if the ID of the current item matches the ID of the item to be removed
      this.cartItemList.splice(index,1)       // Remove the item from the "cartItemList" array at the current index
    })
    this.productList.next(this.cartItemList);
  }
  removeAllcart(){            // Method to remove all items from the cart
    this.cartItemList=[]    // Set the "cartItemList" array to an empty array
    this.productList.next(this.cartItemList);    // Update the product list in the BehaviorSubject with the empty "cartItemList"
  }
}
