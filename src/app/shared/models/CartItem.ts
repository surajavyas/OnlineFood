import { Foods } from 'src/app/shared/models/food';
export class CaertItem{
    constructor(food:Foods){
        this.food=food;
        this.price
    }
    food:Foods;
    quantity:number = 1;
    get price():number{
        return this.food.price * this.quantity
    }
}