import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCVuZ7nkQSSxfmPSqWxx_oVS-VVHWeYOHY",
  authDomain: "filipinofooddelicacies-c2fc7.firebaseapp.com",
  databaseURL: "https://filipinofooddelicacies-c2fc7.firebaseio.com",
  storageBucket: "filipinofooddelicacies-c2fc7.appspot.com",
  messagingSenderId: "877981756963"
};

export const FirebaseModule = AngularFireModule.initializeApp(firebaseConfig);
export { AngularFireDatabaseModule, AngularFireAuthModule }