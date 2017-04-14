import { Component, OnInit } from '@angular/core';

import { FileItem } from './../../models/file-item.model';
import { MediaService } from './../../services/media.service';

@Component({
  selector: 'media-upload-shared',
  templateUrl: './media-upload.component.html',
  styleUrls: ['./media-upload.component.scss']
})
export class MediaUploadComponent implements OnInit {

  isDropZoneOver: boolean = false;
  isEnabledUpload: boolean = true;
  files: Array<FileItem[]> = [];

  constructor(public mediaService: MediaService) { }

  ngOnInit() {
  }

  public fileOverDropZone(e: any): void {
    this.isDropZoneOver = e;
  }

  uploadImagesToFirebase() {
    this.isEnabledUpload = false;
    this.mediaService.uploadImagesToFirebase(this.files);
  }

  clearFiles() {
    this.files = [];
    this.isEnabledUpload = true;
  }

}
