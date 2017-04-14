import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CategoriesSharedModule } from './../../categories/shared/categories-shared.module';
import { SharedModule } from './../../shared/shared.module';

import { RecipeService } from './services/recipe.service';

import { RecipeListSharedComponent } from './components/recipe-list-shared/recipe-list-shared.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    CategoriesSharedModule
  ],
  declarations: [RecipeListSharedComponent],
  exports: [RecipeListSharedComponent],
  providers: [RecipeService]
})
export class RecipesSharedModule { }
