import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RecipeService } from './../../shared/services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  recipeId: any = null;
  recipe: any;
  recicpe$: any;
  isLoaded: boolean = false;

  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.recipeId = params['id'];
        this.recicpe$ = this.recipeService.getRecipe(params['id']);
        this.recicpe$.subscribe(snapshot => {
          this.isLoaded = true;
          this.recipe = snapshot;
        });
      }
      if (this.recipeId == null) { this.isLoaded = true; }
    });
  }

  ngOnInit() {
  }

  delete(recipe) {
    let conf = prompt("Are you sure you want to delete this? Type CONFIRM to delete", "");
    if (conf == "CONFIRM") {
      this.recipeService.removeRecipe(recipe);
    }
  }

}
