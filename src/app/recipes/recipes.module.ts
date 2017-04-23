import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TinymceModule } from 'angular2-tinymce';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

import { SharedModule } from './../shared/shared.module';
import { RecipesSharedModule } from './shared/recipes-shared.module';
import { RecipeRoutingModule, RecipeListComponent, RecipeCreateComponent, RecipeDetailsComponent, RecipeUpdateComponent } from './recipes-routing.route';
import { MediaSharedModule } from './../media/shared/media-shared.module';

const tinymceConfig = {
  menubar: false,
  force_br_newlines: false,
  plugins: ["autoresize"],
  force_p_newlines: false,
  forced_root_block: '',
  toolbar: 'undo redo | styleselect fontsizeselect | bold italic underline | alignleft aligncenter alignright alignjustify',
  fontsize_formats: '8px 9px 10px 11px 12px 13px 14px 15px 16px 17px 18px 19px 20px 21px 22px 23px 24px 25px 26px 27px 28px 29px 30px 31px 32px 33px 34px 35px 36px'
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MultiselectDropdownModule,
    TinymceModule.withConfig(tinymceConfig),
    SharedModule,
    MediaSharedModule,
    RecipeRoutingModule,
    RecipesSharedModule
  ],
  declarations: [RecipeListComponent, RecipeCreateComponent, RecipeDetailsComponent, RecipeUpdateComponent]
})
export class RecipesModule { }
