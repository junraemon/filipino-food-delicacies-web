import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';

import { Category } from './../models/category.model';

@Injectable()
export class CategoryService {
  private path = `/categories`;
  public categories$: FirebaseListObservable<Category[]>;

  constructor(private af: AngularFireDatabase) {
    this.categories$ = af.list(this.path, {
      query: {
        orderByChild: 'date',
      }
    });
  }

  getCategory(id) {
    return this.af.object(this.path + "/" + id);
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
