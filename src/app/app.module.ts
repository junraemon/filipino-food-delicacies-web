import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';
import { CoreModule } from './core/core.module';
import { FirebaseModule } from './firebase/firebase.module';
import { HomeModule } from './home/home.module';
import { MediaModule } from './media/media.module';
import { RecipesModule } from './recipes/recipes.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, RouterModule.forRoot([], { useHash: false }),
    AuthModule, CategoriesModule, CoreModule, FirebaseModule, HomeModule, MediaModule, RecipesModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
