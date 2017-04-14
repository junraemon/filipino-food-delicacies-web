import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CategoryService } from './../../categories/shared/services/category.service';

@Pipe({
  name: 'categoryAsync'
})
export class CategoryAsyncPipe implements PipeTransform {
  name: Observable<string>;
  constructor(public categoryService: CategoryService) { }
  transform(value: Observable<string>, type: string): Observable<string> {
    this.name = Observable.create(observer => {
      this.categoryService.getCategory(value).subscribe(snapshot => {
        observer.next(snapshot[type]);
      });
    });
    if (value) { return this.name; }
    return value;
  }

}
