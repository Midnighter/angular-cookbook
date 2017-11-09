import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {Recipe} from '../recipes/recipe.model';

export class ShoppingListService {
  public ingredients: Ingredient[] = [
    new Ingredient('Cinnamon', 2.1),
    new Ingredient('All-spice', 0.1)
  ];
  public ingredientFired = new EventEmitter<Ingredient>();

  constructor() { }

  select(idx: number) {
    this.ingredientFired.emit(this.ingredients[idx]);
  }

  addIngredient(item: Ingredient) {
    this.ingredients.push(item);
  }

  removeIngredient(idx: number) {
    this.ingredients.splice(idx, 1);
  }

  addRecipe(recipe: Recipe) {
    this.ingredients = this.ingredients.concat(recipe.ingredients);
  }
}
