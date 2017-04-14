import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { CategoryService } from './../../shared/services/category.service';

@Component({
  selector: 'category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.scss']
})
export class CategoryCreateComponent implements OnInit {

  isLoaded: boolean = false;
  categoryId: any = null;
  category: any;

  categoryForm = this.fb.group({
    name: ["", Validators.required],
    imageUrl: ["", Validators.required],
    description: ["", Validators.required],
  });

  constructor(
    public fb: FormBuilder,
    private categoryService: CategoryService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.categoryId = params['id'];
        this.category = this.categoryService.getCategory(params['id']);
        this.category.subscribe(snapshot => {
          this.isLoaded = true;
          this.categoryForm = this.fb.group({
            name: [snapshot.name, Validators.required],
            imageUrl: [snapshot.imageUrl, Validators.required],
            description: [snapshot.description, Validators.required],
          });
        });
      }
      if (this.categoryId == null) { this.isLoaded = true; }
    });
  }

  ngOnInit() {
  }

  addCategory(event) {
    if (!!this.categoryId) {
      this.categoryService.updateCategory(this.categoryId, this.categoryForm.value).then(_ => this.router.navigate(['/categories']));
    } else {

      this.categoryService.createCategory(this.categoryForm.value).then(_ => this.router.navigate(['/categories']));
    }
  }

}
