import {Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Cinnamon', 2.1),
    new Ingredient('All-spice', 0.1)
  ];
  @Output() selectFired = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onClick(item: Ingredient) {
    this.selectFired.emit(item);
  }

  addIngredient(item: Ingredient) {
    this.ingredients.push(item);
  }

  removeIngredient(item: Ingredient) {
    const i = this.ingredients.indexOf(item);
    this.ingredients.splice(i, 1);
  }

}
