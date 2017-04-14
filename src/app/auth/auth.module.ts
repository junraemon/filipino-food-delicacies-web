import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {
  AuthRoutingModule,
  SignInComponent,
  AuthGuard,
  AuthService,
  UnauthGuard
} from './auth-routing.route';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent, canActivate: [UnauthGuard] }
];

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  declarations: [SignInComponent],
  providers: [
    AuthGuard,
    AuthService,
    UnauthGuard
  ]
})
export class AuthModule { }