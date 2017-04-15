import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
   { path: '', loadChildren: './home/home.module#HomeModule' },
   { path: 'recipe', loadChildren: './recipes/recipes.module#RecipesModule' },
   { path: 'category', loadChildren: './categories/categories.module#CategoriesModule' },
   { path: 'media', loadChildren: './media/media.module#MediaModule' },
   { path: 'sign-in', loadChildren: './auth/auth.module#AuthModule' },
   { path: '**', redirectTo: '/' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);