import { Routes, RouterModule } from '@angular/router';

import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeCreateComponent } from './components/recipe-create/recipe-create.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RecipeUpdateComponent } from './components/recipe-update/recipe-update.component';
import { AuthGuard } from './../auth/services/auth-guard.service';

const routes: Routes = [
   { path: '', component: RecipeListComponent, canActivate: [AuthGuard] },
   { path: 'add', component: RecipeCreateComponent, canActivate: [AuthGuard] },
   { path: 'edit/:id', component: RecipeUpdateComponent, canActivate: [AuthGuard] },
   { path: 'details/:id', component: RecipeDetailsComponent, canActivate: [AuthGuard] },
   { path: 'edit', redirectTo: 'recipes' },
   { path: 'details', redirectTo: 'recipes' },
];

export const RecipeRoutingModule = RouterModule.forChild(routes);
export { RecipeListComponent, RecipeCreateComponent, RecipeDetailsComponent, RecipeUpdateComponent }