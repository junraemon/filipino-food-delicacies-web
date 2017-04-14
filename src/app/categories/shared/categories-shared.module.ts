import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryService } from './services/category.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  exports: [],
  providers: [CategoryService]
})
export class CategoriesSharedModule { }
