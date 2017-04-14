import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from "firebase";

import { CategoryService } from './../../shared/services/category.service';
import { Category } from './../../shared/models/category.model';

@Component({
  selector: 'category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.scss']
})
export class CategoryCreateComponent implements OnInit {

  categoryForm: FormGroup;

  constructor(public fb: FormBuilder, private categoryService: CategoryService, private router: Router) {
    this.createFormBuilder(new Category());
  }

  ngOnInit() { }

  createFormBuilder(category: Category) {
    this.categoryForm = this.fb.group({
      name: [category.name, Validators.required],
      imageUrl: [category.imageUrl, Validators.required],
      description: [category.description, Validators.required],
    });
  }

  addCategory(event) {
    if (this.categoryForm.valid) {
      let newCategory = {
        name: this.categoryForm.value.name,
        imageUrl: this.categoryForm.value.imageUrl,
        description: this.categoryForm.value.description,
        date: firebase.database.ServerValue.TIMESTAMP
      };
      this.categoryService.createCategory(newCategory)
        .then(_ => this.router.navigate(['/categories']));
    } else {
      alert("Some fields are empty");
    }

  }

  selectImage(media) {
    this.categoryForm.patchValue({
      imageUrl: media.url,
    });
  }

}
