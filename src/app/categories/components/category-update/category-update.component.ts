import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { CategoryService } from './../../shared/services/category.service';
import { Category } from './../../shared/models/category.model';

@Component({
  selector: 'category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.scss']
})
export class CategoryUpdateComponent implements OnInit {

  isLoaded: boolean = false;
  categoryId: any = null;
  category: any;
  categoryForm: FormGroup;

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
          if (snapshot.name) {
            this.isLoaded = true;
            this.createFormBuilder(snapshot);
          } else {
            this.router.navigate(['/categories']);
          }
        });
      }
    });
  }

  ngOnInit() {
  }

  createFormBuilder(category: Category) {
    this.categoryForm = this.fb.group({
      name: [category.name, Validators.required],
      imageUrl: [category.imageUrl, Validators.required],
      description: [category.description, Validators.required],
    });
  }

  update() {
    this.categoryService.updateCategory(this.categoryId, this.categoryForm.value).then(_ => this.router.navigate(['/categories']));
  }

  selectImage(media) {
    this.categoryForm.patchValue({
      imageUrl: media.url,
    });
  }

}
