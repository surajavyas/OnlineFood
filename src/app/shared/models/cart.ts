import { CaertItem } from "./CartItem";

export class cart{
    item:CaertItem[]=[];
    get totalPrice():number{
        let totalPrice = 0;
        this.item.forEach(item =>{
            totalPrice += item.price
        })
        return totalPrice
    }
}