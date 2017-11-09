import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingComponent} from './shopping/shopping.component';
import {RecipeDefaultComponent} from './recipes/recipe-default/recipe-default.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent, children: [
    {path: '', component: RecipeDefaultComponent, pathMatch: 'full'},
    {path: ':id', component: RecipeDetailComponent}
  ]},
  {path: 'shopping', component: ShoppingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
