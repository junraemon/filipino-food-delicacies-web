import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { Recipe } from './../models/recipe.model';

@Injectable()
export class RecipeService {
  public recipes$: FirebaseListObservable<Recipe[]>;
  private path = `/recipes`;

  constructor(private af: AngularFireDatabase) {

    this.recipes$ = af.list(this.path, {
      query: {
        orderByChild: 'date',
      }
    });
  }

  getRecipe(id) {
    return this.af.object(this.path + "/" + id);
  }

  createRecipe(recipe: Recipe): firebase.Promise<any> {
    return this.recipes$.push(recipe);
  }

  removeRecipe(recipe: Recipe): firebase.Promise<any> {
    return this.recipes$.remove(recipe.$key);
  }

  updateRecipe(recipeId: any, changes: any): firebase.Promise<any> {
    return this.recipes$.update(recipeId, changes);
  }
}
