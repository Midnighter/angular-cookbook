import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() detailFired = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
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

  constructor() { }

  ngOnInit() {
  }

  onDetail(item: Recipe) {
    this.detailFired.emit(item);
  }

}
