import {Ingredient} from '../shared/ingredient.model';
import {Recipe} from '../recipes/recipe.model';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService {
  ingredientChanged = new Subject<Ingredient>();
  ingredientsChanged = new Subject<Ingredient[]>();
  ingredients: Ingredient[] = [
    new Ingredient('Cinnamon', 2.1),
    new Ingredient('All-spice', 0.1)
  ];

  constructor() { }

  select(idx: number) {
    this.ingredientChanged.next(this.ingredients[idx]);
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(item: Ingredient) {
    this.ingredients.push(item);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  removeIngredient(idx: number) {
    this.ingredients.splice(idx, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addRecipe(recipe: Recipe) {
    this.ingredients.push(...recipe.ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
