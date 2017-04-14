import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import { Observable } from 'rxjs/Observable';
import * as firebase from "firebase";

import { CategoryService } from './../../../categories/shared/services/category.service';
import { RecipeService } from './../../shared/services/recipe.service';
import { Recipe } from './../../shared/models/recipe.model';


@Component({
  selector: 'recipe-update',
  templateUrl: './recipe-update.component.html',
  styleUrls: ['./recipe-update.component.scss']
})
export class RecipeUpdateComponent implements OnInit {

  isLoaded: boolean = false;
  recipeId: any = null;
  recicpe$: Observable<Recipe>;
  categories$: any;
  categories: IMultiSelectOption[];
  mySettings: IMultiSelectSettings;
  myTexts: IMultiSelectTexts;
  recipeForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private recipeService: RecipeService,
    public categoryService: CategoryService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.multiSelectSettings();
    this.categories$ = this.categoryService.categories$;
    this.activatedRoute.params.subscribe(params => {
      this.recipeId = params['id'];
      this.recicpe$ = this.recipeService.getRecipe(params['id']);
      this.recicpe$.subscribe(snapshot => {
        if (snapshot.name) {
          this.categories$.subscribe(snapshots => {
            this.categories = snapshots.map(snapshot => {
              return { "id": snapshot.$key, "name": snapshot.name };
            });
            this.isLoaded = true;
            this.createFormBuilder(snapshot);
          });
        } else {
          this.router.navigate(['/recipes']);
        }
      });
    });
  }

  ngOnInit() { }

  multiSelectSettings() {
    this.mySettings = {
      pullRight: false,
      enableSearch: false,
      checkedStyle: 'fontawesome',
      buttonClasses: 'btn btn-default btn-secondary',
      selectionLimit: 0,
      closeOnSelect: false,
      autoUnselect: false,
      showCheckAll: false,
      showUncheckAll: false,
      dynamicTitleMaxItems: 3,
      maxHeight: '300px',
    };
    this.myTexts = {
      checkAll: 'Check all',
      uncheckAll: 'Uncheck all',
      checked: 'checked',
      checkedPlural: 'checked',
      searchPlaceholder: 'Search...',
      defaultTitle: 'Select',
      allSelected: 'All selected',
    };
  }

  createFormBuilder(recipe: Recipe) {
    this.recipeForm = this.fb.group({
      name: [recipe.name, Validators.required],
      imageUrl: [recipe.imageUrl, Validators.required],
      shortIntro: [recipe.shortIntro, Validators.required],
      details: [recipe.details, Validators.required],
      categories: [recipe.categories, Validators.required],
    });
  }

  update(event) {
    if (this.recipeForm.valid) {
      this.recipeService.updateRecipe(this.recipeId, this.recipeForm.value).then(_ => this.router.navigate(['/recipes']));
    } else {
      alert("Some fields are empty");
    }
  }

  selectImage(media) {
    this.recipeForm.patchValue({
      imageUrl: media.url,
    });
  }

}
