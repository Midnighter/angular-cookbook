import { Component, OnInit, ViewChild } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ShoppingEditComponent} from './shopping-edit/shopping-edit.component';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  @ViewChild(ShoppingEditComponent)
  private editComponent: ShoppingEditComponent;
  @ViewChild(ShoppingListComponent)
  private listComponent: ShoppingListComponent;

  constructor() { }

  ngOnInit() {
  }

  onIngredientSelected(item: Ingredient) {
    console.log(item.name);
    this.editComponent.onDisplay(item);
  }

  onIngredientAdded(item: Ingredient) {
    // this.addedIngredient = item;
  }

}
