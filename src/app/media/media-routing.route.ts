import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './../auth/services/auth-guard.service';
import { MediaComponent } from './components/media/media.component';

const routes: Routes = [
   { path: '', component: MediaComponent, canActivate: [AuthGuard] },
];

export const MediaRoutingModule = RouterModule.forChild(routes);
export { MediaComponent }