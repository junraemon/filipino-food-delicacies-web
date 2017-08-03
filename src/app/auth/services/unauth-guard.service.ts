import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';


@Injectable()
export class UnauthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.auth.auth$.authState
      .take(1)
      .map(authState => {
        return !((!!authState) && authState.uid == "jaAqo7kprpdDxRYhpIPf39Y5Ux33")
      })
      .do(unauthenticated => {
        if (!unauthenticated) { this.router.navigate(['/']); }
      });
  }
}
