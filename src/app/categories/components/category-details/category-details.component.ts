import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from './../../shared/services/category.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {

  isLoaded: boolean = false;
  categoryId: any = null;
  category: any;
  category$: any;

  constructor(
    public fb: FormBuilder,
    private categoryService: CategoryService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.categoryId = params['id'];
        this.category$ = this.categoryService.getCategory(params['id']);
        this.category$.subscribe(snapshot => {
          this.isLoaded = true;
          this.category = snapshot;
        });
      }
      if (this.categoryId == null) { this.isLoaded = true; }
    });
  }

  ngOnInit() {
  }

  delete(category) {
    let conf = prompt("Are you sure you want to delete this? Type CONFIRM to delete", "");
    if (conf == "CONFIRM") {
      this.categoryService.removeCategory(category);
    }
  }
}
