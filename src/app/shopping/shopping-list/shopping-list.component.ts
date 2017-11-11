import {Component, OnDestroy, OnInit} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private ingredientsSub: Subscription;

  constructor(private shopService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shopService.getIngredients();
    this.ingredientsSub = this.shopService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  onClick(idx: number) {
    this.shopService.select(idx);
  }

  ngOnDestroy() {
    this.ingredientsSub.unsubscribe();
  }
}
