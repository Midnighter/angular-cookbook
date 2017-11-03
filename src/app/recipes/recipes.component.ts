import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  detail: Recipe;

  constructor() { }

  ngOnInit() {
  }

  onDetail(item: Recipe) {
    this.detail = item;
  }

}
