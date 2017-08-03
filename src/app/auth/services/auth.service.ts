import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;

  constructor(public auth$: AngularFireAuth) {
    this.user = auth$.authState;
  }

  get authenticated() {
    return this.auth$.idToken;
  }

  signIn(provider) {
    return this.auth$.auth.signInWithPopup(provider);
  }

  signInWithGoogle() {
    return this.signIn(new firebase.auth.GoogleAuthProvider());
  }

  signOut() {
    return this.auth$.auth.signOut();
  }
}
