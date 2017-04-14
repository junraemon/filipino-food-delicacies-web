import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './../auth/services/auth-guard.service';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
   { path: '', component: HomeComponent, canActivate: [AuthGuard] },
];

export const HomeRoutingModule = RouterModule.forChild(routes);
export { HomeComponent }