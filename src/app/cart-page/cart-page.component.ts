import { Foods } from 'src/app/shared/models/food';
import { FoodService } from './../services/food/food.service';
import { CaertItem } from './../shared/models/CartItem';
import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { cart } from '../shared/models/cart';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
cart! : cart;
  constructor(private cartService:CartService) {
    

    this.setCart()
   }

  ngOnInit(): void {
  }
  setCart(){
    this.cart=this.cartService.getCart()
  }
  removeFromCart(CaertItem:CaertItem){
    this.cartService.removeFromCart(CaertItem.food.id)
    this.setCart()

  }
  changeQuntity(CaertItem:CaertItem,quntityInString:string){
    const quantity = parseInt(quntityInString)
    this.cartService.changeQuantity(CaertItem.food.id,quantity)
    this.setCart()
  }

}
