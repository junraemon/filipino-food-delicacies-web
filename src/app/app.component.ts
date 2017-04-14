import { Component } from '@angular/core';
import { Router } from "@angular/router"
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentRoute: any;
  constructor(private auth: AuthService, private router: Router) {
    router.events.subscribe((url: any) => this.currentRoute = url.url);
  }

  signOut(): void {
    this.auth.signOut().then(_ => this.router.navigate(['/sign-in']));
  }

  signIn(): void {
    this.auth.signInWithGoogle();
  }
}
