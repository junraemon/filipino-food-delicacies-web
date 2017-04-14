import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TinymceModule } from 'ng2-tinymce-alt';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

import { SharedModule } from './../shared/shared.module';
import { RecipesSharedModule } from './shared/recipes-shared.module';
import { RecipeRoutingModule, RecipeListComponent, RecipeCreateComponent, RecipeDetailsComponent, RecipeUpdateComponent } from './recipes-routing.route';

const tinymceConfig = {
  menubar: false,
  force_br_newlines: false,
  plugins: ["autoresize"],
  force_p_newlines: false,
  forced_root_block: '',
  toolbar: 'undo redo | styleselect | bold italic underline | alignleft aligncenter alignright alignjustify'
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MultiselectDropdownModule,
    TinymceModule.withConfig(tinymceConfig),
    SharedModule,
    RecipeRoutingModule,
    RecipesSharedModule
  ],
  declarations: [RecipeListComponent, RecipeCreateComponent, RecipeDetailsComponent, RecipeUpdateComponent]
})
export class RecipesModule { }
