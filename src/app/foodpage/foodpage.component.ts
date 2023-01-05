import { CartService } from './../services/cart.service';
import { FoodService } from './../services/food/food.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Foods } from 'src/app/shared/models/food';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {
food!:Foods
  constructor(private activatedRoute : ActivatedRoute, private foodService: FoodService, private cartService:CartService,private Router:Router) { 
    
    activatedRoute.params.subscribe((params)=>{
      if(params['id'])
      this.food = foodService.getFoodById(params['id'])
    })
  }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.addToCart(this.food)
    this.Router.navigateByUrl('/cart-page')
  }

}
