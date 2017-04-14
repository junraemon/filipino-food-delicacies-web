import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap';

import { MediaUploadComponent } from './components/media-upload/media-upload.component';
import { MediaListComponent } from './components/media-list/media-list.component';
import { MediaModalComponent } from './components/media-modal/media-modal.component';
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';

import { MediaService } from './services/media.service';

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  declarations: [MediaUploadComponent, NgDropFilesDirective, MediaListComponent, MediaModalComponent],
  exports: [MediaUploadComponent, NgDropFilesDirective, MediaListComponent, MediaModalComponent],
  providers: [MediaService]
})
export class MediaSharedModule { }
