import { Component, OnInit } from '@angular/core';
import { Category } from './../../shared/models/category.model';
import { CategoryService } from './../../shared/services/category.service';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  isLoaded: boolean = false;
  searchString: string;
  categoryList: Array<Category> = [];
  categoryLoaded: Array<Category> = [];

  constructor(private categoryService: CategoryService) {
    this.categoryService.categories$
      .map((arr) => arr.reverse())
      .subscribe(snapshots => {
        this.isLoaded = true;
        this.categoryList = snapshots;
        this.categoryLoaded = snapshots;
      });
  }

  ngOnInit() {
  }

  initializeItems(): void {
    this.categoryList = this.categoryLoaded;
  }

  search(event: any) {
    this.initializeItems();
    let q = this.searchString;
    if (!q) { return; }
    this.categoryList = this.categoryList.filter((v) => {
      if (v.name && q) {
        if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) { return true; }
        return false;
      }
    });
  }

  delete(category) {
    let conf = prompt("Are you sure you want to delete this? Type CONFIRM to delete", "");
    if (conf == "CONFIRM") {
      this.categoryService.removeCategory(category);
    }
  }

}
