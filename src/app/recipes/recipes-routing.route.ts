import { Routes, RouterModule } from '@angular/router';

import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeCreateComponent } from './components/recipe-create/recipe-create.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RecipeUpdateComponent } from './components/recipe-update/recipe-update.component';
import { AuthGuard } from './../auth/services/auth-guard.service';

const routes: Routes = [
   { path: 'recipe/edit', redirectTo: 'recipes' },
   { path: 'recipe/details', redirectTo: 'recipes' },
   { path: 'recipes', component: RecipeListComponent, canActivate: [AuthGuard] },
   { path: 'recipe/add', component: RecipeCreateComponent, canActivate: [AuthGuard] },
   { path: 'recipe/edit/:id', component: RecipeUpdateComponent, canActivate: [AuthGuard] },
   { path: 'recipe/details/:id', component: RecipeDetailsComponent, canActivate: [AuthGuard] },
];

export const RecipeRoutingModule = RouterModule.forChild(routes);
export { RecipeListComponent, RecipeCreateComponent, RecipeDetailsComponent, RecipeUpdateComponent }