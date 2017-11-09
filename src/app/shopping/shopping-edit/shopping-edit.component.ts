import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;

  constructor(private shopService: ShoppingListService) { }

  ngOnInit() {
    this.shopService.ingredientFired.subscribe(
      (ingredient: Ingredient) => this.onDisplay(ingredient)
    );
  }

  onDisplay(item: Ingredient) {
    console.log(item.name);
    this.name.nativeElement.value = item.name;
    this.amount.nativeElement.value = item.amount;
  }

  onAdd() {
    this.shopService.addIngredient(new Ingredient(
      this.name.nativeElement.value,
      this.amount.nativeElement.value
    ));
  }

  onClear() {
    this.name.nativeElement.value = '';
    this.amount.nativeElement.value = '';
  }

  // onRemove() {
  //   this.removeFired.emit();
  // }

}
