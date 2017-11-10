import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {Recipe} from '../recipe.model';
import {ShoppingListService} from '../../shopping/shopping-list.service';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  item: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private shopService: ShoppingListService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.item = this.recipeService.getRecipe(this.id);
      }
    );
  }

  onBuy() {
    this.shopService.addRecipe(this.item);
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
