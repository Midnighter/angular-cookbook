import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ShoppingListService} from '../../shopping/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  item: Recipe;

  constructor(private recipeService: RecipeService,
              private shopService: ShoppingListService) { }

  ngOnInit() {
    this.recipeService.detailFired.subscribe(
      (recipe: Recipe) => this.item = recipe
    );
  }

  onBuy() {
    this.shopService.addRecipe(this.item);
  }

}
