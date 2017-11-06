// import { Injectable } from '@angular/core';
import {Recipe} from './recipe.model';
import {EventEmitter, Output} from '@angular/core';

// @Injectable()

export class RecipeService {
  public recipes: Recipe[] = [
    new Recipe(
      'Apple Cake',
      'Make a delicious apple cake.',
      'http://maxpixel.freegreatpicture.com/static/photo/1x/Food-Sweet-Baked-Italian-Apple-Cake-688119.jpg'
    ),
    new Recipe(
      'Chocolate Cake',
      'Make a delicious chocolate cake.',
      'https://pixnio.com/free-images/food-and-drink/desserts-cakes/chocolate-dessert-cake-725x544.jpg'
    )
  ];
  @Output() detailFired = new EventEmitter<Recipe>();

  constructor() { }

  select(idx: number) {
    this.detailFired.emit(this.recipes[idx]);
  }

}
