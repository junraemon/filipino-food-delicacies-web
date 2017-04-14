import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppHeaderComponent } from './components/app-header/app-header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [AppHeaderComponent],
  exports: [AppHeaderComponent]
})
export class CoreModule { }
