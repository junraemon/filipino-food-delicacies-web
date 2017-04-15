import { Routes, RouterModule } from '@angular/router';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { UnauthGuard } from './services/unauth-guard.service';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
   { path: '', component: SignInComponent, canActivate: [UnauthGuard] }
];

export const AuthRoutingModule = RouterModule.forChild(routes);
export {
   SignInComponent,
   AuthGuard,
   AuthService,
   UnauthGuard
}