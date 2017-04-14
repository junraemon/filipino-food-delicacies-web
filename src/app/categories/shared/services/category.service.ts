import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';

import { Category } from './../models/category.model';

@Injectable()
export class CategoryService {
  private path = `/categories`;
  public categories$: FirebaseListObservable<Category[]>;

  constructor(private af: AngularFire) {
    this.categories$ = af.database.list(this.path);
  }

  getCategory(id) {
    return this.af.database.object(this.path + "/" + id);
  }

  createCategory(category: Category): firebase.Promise<any> {
    return this.categories$.push(category);
  }

  removeCategory(category: Category): firebase.Promise<any> {
    return this.categories$.remove(category.$key);
  }

  updateCategory(categoryId: any, changes: any): firebase.Promise<any> {
    return this.categories$.update(categoryId, changes);
  }

}
