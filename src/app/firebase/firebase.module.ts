import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2'

const firebaseConfig = {
  apiKey: "AIzaSyCVuZ7nkQSSxfmPSqWxx_oVS-VVHWeYOHY",
  authDomain: "filipinofooddelicacies-c2fc7.firebaseapp.com",
  databaseURL: "https://filipinofooddelicacies-c2fc7.firebaseio.com",
  storageBucket: "filipinofooddelicacies-c2fc7.appspot.com",
  messagingSenderId: "877981756963"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

export const FirebaseModule = AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig);
