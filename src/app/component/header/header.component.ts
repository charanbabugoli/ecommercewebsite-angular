import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {       
  public totalItem:number=0;       // Public variable 'totalItem' initialized to 0 to store the total number of items
  
  constructor( private cartservice:CartService){}          // Constructor that injects the CartService dependency


  ngOnInit(): void {
    this.cartservice.getProducts()     
    .subscribe(res=>{                   // Call the 'getProducts' method from CartService and subscribe to the response
this.totalItem=res.length;          // Assign the length of the response (number of items) to the 'totalItem' variable

    })
    
  }

}
