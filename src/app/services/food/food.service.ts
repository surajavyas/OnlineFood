import { Tag } from './../../shared/models/Tag';
import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Foods{
    return this.getAll().find(food => food.id== id)!
  }

  getAllFoodByTag(tag:string):Foods[]{

    return tag =="All"? this.getAll() : this.getAll().filter(food =>food.tags?.includes(tag))

 
  }


  getAllTag():Tag[]{
    return[
      {
        name:'All',count:(8)
      },
      {
        name:'fastfood',count:(4)
      },
      {
        name:'Lunch',count:(7)
      },

      {
        name:'Burger',count:(5)
      },
    ]
  }

  getAll():Foods[]{
    return [
    {
      id:1,
      name:'Sandwitch',
      cooktime:'10-20',
      price:10, 
      favorite :false,
      origins:['italy'],
      stars:5,
      imgUrl:'../../assets/food/1.jpg',
      tags:['Lunch']

    },
    {
      id:2,
      name:'Vada Pav',
      cooktime:'10-20',
      price:10,
      favorite :true,
      origins:['Mumbai'],
      stars:4,
      imgUrl:'../../assets/food/2.jpg',
      tags:['Lunch']

    },
    {
      id:3,
      name:'Burger',
      cooktime:'10-20',
      price:10,
      favorite :false,
      origins:['Camp'],
      stars:3,
      imgUrl:'../../assets/food/3.jpg',
      tags:['Burger']

    },
    {
      id:4,
      name:'Pasta',
      cooktime:'10-20',
      price:10,
      favorite :false,
      origins:['Chaina'],
      stars:2,
      imgUrl:'../../assets/food/4.jpg',
      tags:['Lunch']

    },
    {
      id:5,
      name:'Idli',
      cooktime:'10-20',
      price:10,
      favorite :false,
      origins:['South-India'],
      stars:5,
      imgUrl:'../../assets/food/5.jpg',
      tags:['fastfood']

    },
    {
      id:6,
      name:'Samosa',
      cooktime:'10-20',
      price:5,
      favorite :false,
      origins:['Pune'],
      stars:4.5,
      imgUrl:'../../assets/food/6.jpg',
      tags:['Lunch']

    },
    {
      id:7,
      name:'pizza',
      cooktime:'10-20',
      price:10,
      favorite :false,
      origins:['italy'],
      stars:3,
      imgUrl:'../../assets/food/7.jpg',
      tags:['Lunch']

    },
    {
      id:8,
      name:'Apple Juice',
      cooktime:'10-20',
      price:10,
      favorite :true,
      origins:['italy'],
      stars:4.5,
      imgUrl:'../../assets/food/8.jpg',
      tags:['Juice']

    },

    ]
  }
}
