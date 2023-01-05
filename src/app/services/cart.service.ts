import { Foods } from 'src/app/shared/models/food';
import { Injectable } from '@angular/core';
import { cart } from '../shared/models/cart';
import { CaertItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private cart:cart = new cart()
addToCart(food:Foods):void{
  let cartItem = this.cart.item.find(item => item.food.id ===food.id)
  if(cartItem){
    this.changeQuantity(food.id,cartItem.quantity+1)
    return;
  }
this.cart.item.push(new CaertItem(food))


}
removeFromCart(foodId:number):void{
  this.cart.item=this.cart.item.filter(item =>item.food.id !=foodId)
}
changeQuantity(quntity:number,foodId:number){
  let cartItem = this.cart.item.find(item => item.food.id===foodId)
  if(!cartItem)return
  cartItem.quantity=quntity
}
getCart():cart{
  return this.cart
}
}
