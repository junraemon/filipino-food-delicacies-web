import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RecipeService } from './../../services/recipe.service';

@Component({
  selector: 'recipe-list-shared',
  templateUrl: './recipe-list-shared.component.html',
  styleUrls: ['./recipe-list-shared.component.scss']
})
export class RecipeListSharedComponent implements OnInit {
  @Input() categoryId: string;
  recipes: Observable<any[]>;
  isLoaded: boolean = false;
  recipeLoaded: Array<any> = [];
  recipeList: Array<any> = [];
  searchString: string;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.recipes$.map((arr) => { return arr.reverse(); })
    this.recipes.subscribe(snapshots => {
      if (this.categoryId) { snapshots = this.filterByCategory(snapshots); }
      this.recipeList = snapshots;
      this.recipeLoaded = snapshots;
      this.isLoaded = true;
    });
  }

  filterByCategory(recipes) {
    return recipes.filter(mapped => {
      let find = false;
      mapped.categories.forEach(category => {
        if (category == this.categoryId) { find = true; return false; };
      });
      return find;
    });
  }

  initializeItems(): void {
    this.recipeList = this.recipeLoaded;
  }

  search(event: any) {
    this.initializeItems();
    let q = this.searchString;
    if (!q) { return; }
    this.recipeList = this.recipeList.filter((v) => {
      if (v.name && q) {
        if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) { return true; }
        return false;
      }
    });
  }

  delete(recipe) {
    let conf = prompt("Are you sure you want to delete this? Type CONFIRM to delete: " + recipe.name, "");
    if (conf == "CONFIRM") {
      this.recipeService.removeRecipe(recipe);
    }
  }

}
