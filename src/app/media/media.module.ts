import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaRoutingModule, MediaComponent } from './media-routing.route';
import { MediaSharedModule } from './shared/media-shared.module';

@NgModule({
  imports: [
    CommonModule,
    MediaSharedModule,
    MediaRoutingModule
  ],
  declarations: [MediaComponent]
})
export class MediaModule { }
