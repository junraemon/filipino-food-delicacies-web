import { Injectable } from '@angular/core';
import { AuthProviders, AuthMethods, AngularFireAuth, FirebaseAuthState } from 'angularfire2';


@Injectable()
export class AuthService {
  private authState: FirebaseAuthState = null;

  constructor(public auth$: AngularFireAuth) {
    auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
  }

  get authenticated(): boolean {
    return (this.authState !== null && this.authState.uid == "jaAqo7kprpdDxRYhpIPf39Y5Ux33");
  }

  get id(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  signIn(provider: number): firebase.Promise<FirebaseAuthState> {
    return this.auth$.login({ provider })
      .catch(error => console.log('ERROR @ AuthService#signIn() :', error));
  }
 
  signInWithGoogle(): firebase.Promise<FirebaseAuthState> {
    return this.signIn(AuthProviders.Google);
  }

  signOut() {
    return this.auth$.logout();
  }
}
