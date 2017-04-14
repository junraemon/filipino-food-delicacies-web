import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import * as firebase from "firebase";

import { CategoryService } from './../../../categories/shared/services/category.service';
import { RecipeService } from './../../shared/services/recipe.service';

@Component({
  selector: 'recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.scss']
})
export class RecipeCreateComponent implements OnInit {

  isLoaded: boolean = false;
  recipeId: any = null;
  recicpe$: any;
  categories$: any;
  categories: IMultiSelectOption[];
  mySettings: IMultiSelectSettings;
  myTexts: IMultiSelectTexts;
  recipeForm = this.fb.group({
    name: ["", Validators.required],
    imageUrl: ["", Validators.required],
    shortIntro: ["", Validators.required],
    details: ["", Validators.required],
    categories: [[], Validators.required],
  });

  constructor(
    public fb: FormBuilder,
    private recipeService: RecipeService,
    public categoryService: CategoryService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
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

    this.categories$ = this.categoryService.categories$;
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.recipeId = params['id'];
        this.recicpe$ = this.recipeService.getRecipe(params['id']);
        this.recicpe$.subscribe(snapshot => {
          this.categories$.subscribe(snapshots => {
            this.categories = snapshots.map(snapshot => {
              return { "id": snapshot.$key, "name": snapshot.name };
            });
            this.isLoaded = true;
            this.recipeForm = this.fb.group({
              name: [snapshot.name, Validators.required],
              imageUrl: [snapshot.imageUrl, Validators.required],
              shortIntro: [snapshot.shortIntro, Validators.required],
              details: [snapshot.details, Validators.required],
              categories: [snapshot.categories, Validators.required],
            });
          });
        });
      }
      if (this.recipeId == null) { this.isLoaded = true; }
    });

    this.categories$.subscribe(snapshots => {
      this.categories = snapshots.map(snapshot => {
        return { "id": snapshot.$key, "name": snapshot.name };
      });
    });
  }

  ngOnInit() {
  }

  addRecipe(event) {
    if (this.recipeForm.valid) {
      if (!!this.recipeId) {
        this.recipeService.updateRecipe(this.recipeId, this.recipeForm.value).then(_ => this.router.navigate(['/recipes']));
      } else {
        let newRecipe = {
          name: this.recipeForm.value.name,
          imageUrl: this.recipeForm.value.imageUrl,
          shortIntro: this.recipeForm.value.shortIntro,
          details: this.recipeForm.value.details,
          categories: this.recipeForm.value.categories,
          date: firebase.database.ServerValue.TIMESTAMP
        };
        this.recipeService.createRecipe(newRecipe).then(_ => this.router.navigate(['/recipes']))
          .catch((err: any) => {
            throw Error(err)
          });
      }
    } else {
      alert("Some fields are empty");
    }
  }

}
