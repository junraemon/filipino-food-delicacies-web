
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { CoreModule } from './core/core.module';
import { FirebaseModule } from './firebase/firebase.module';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AuthService } from "./auth/auth-routing.route";
import { AuthGuard } from './auth/services/auth-guard.service';
import { UnauthGuard } from './auth/services/unauth-guard.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, routing,
    CoreModule, FirebaseModule,
  ],
  bootstrap: [AppComponent],
  providers: [AuthService, AuthGuard, UnauthGuard]
})
export class AppModule { }
