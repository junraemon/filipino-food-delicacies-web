import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaUploadComponent } from './components/media-upload/media-upload.component';
import { MediaListComponent } from './components/media-list/media-list.component';
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';

import { MediaService } from './services/media.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MediaUploadComponent, NgDropFilesDirective, MediaListComponent],
  exports: [MediaUploadComponent, NgDropFilesDirective, MediaListComponent],
  providers: [MediaService]
})
export class MediaSharedModule { }
