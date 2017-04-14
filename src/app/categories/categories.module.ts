import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './../shared/shared.module';
import { CategoryRoutingModule, CategoryListComponent, CategoryCreateComponent, CategoryDetailsComponent, CategoryUpdateComponent } from './categories-routing.route';
import { CategoriesSharedModule } from './shared/categories-shared.module';
import { RecipesSharedModule } from './../recipes/shared/recipes-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CategoryRoutingModule,
    CategoriesSharedModule,
    RecipesSharedModule
  ],
  declarations: [CategoryListComponent, CategoryCreateComponent, CategoryDetailsComponent, CategoryUpdateComponent]
})
export class CategoriesModule { }
