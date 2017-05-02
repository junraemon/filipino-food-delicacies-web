import { Component } from '@angular/core';
import {
  Router,
  // import as RouterEvent to avoid confusion with the DOM Event
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from "@angular/router";
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentRoute: any;
  loading: boolean = true;
  constructor(public auth: AuthService, private router: Router) {
    router.events.subscribe((event: any) => {
      this.currentRoute = event.url;
      this.navigationInterceptor(event);
    });
  }

  signOut(): void {
    this.auth.signOut().then(_ => this.router.navigate(['/sign-in']));
  }

  signIn(): void {
    this.auth.signInWithGoogle();
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true;
    }
    if (event instanceof NavigationEnd) {
      this.loading = false;
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.loading = false;
    }
    if (event instanceof NavigationError) {
      this.loading = false;
    }
  }
}
