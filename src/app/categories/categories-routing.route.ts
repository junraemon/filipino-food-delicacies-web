import { Routes, RouterModule } from '@angular/router';

import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryCreateComponent } from './components/category-create/category-create.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { AuthGuard } from './../auth/services/auth-guard.service';

const routes: Routes = [
   { path: 'category/edit', redirectTo: 'categories' },
   { path: 'category/details', redirectTo: 'categories' },
   { path: 'categories', component: CategoryListComponent, canActivate: [AuthGuard] },
   { path: 'category/add', component: CategoryCreateComponent, canActivate: [AuthGuard] },
   { path: 'category/edit/:id', component: CategoryCreateComponent, canActivate: [AuthGuard] },
   { path: 'category/details/:id', component: CategoryDetailsComponent, canActivate: [AuthGuard] },
];

export const CategoryRoutingModule = RouterModule.forChild(routes);
export { CategoryListComponent, CategoryCreateComponent, CategoryDetailsComponent }