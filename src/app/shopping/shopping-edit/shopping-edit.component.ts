import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;
  @Output() addFired = new EventEmitter<Ingredient>();
  @Output() removeFired = new EventEmitter<void>();
  @Input() item: Ingredient;

  constructor() { }

  ngOnInit() {
  }

  onDisplay(item: Ingredient) {
    console.log(item.name);
    this.item = item;
    this.name.nativeElement.value = item.name;
    this.amount.nativeElement.value = item.amount;
  }

  onAdd() {
    this.addFired.emit(new Ingredient(
      this.name.nativeElement.value,
      this.amount.nativeElement.value));
  }

  onClear() {
    this.name.nativeElement.value = '';
    this.amount.nativeElement.value = '';
  }

  onRemove() {
    this.removeFired.emit();
  }

}
