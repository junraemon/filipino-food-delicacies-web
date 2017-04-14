import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { FirebaseListObservable } from 'angularfire2';
import { MediaService } from './../../services/media.service';

@Component({
  selector: 'media-list-shared',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.scss']
})
export class MediaListComponent implements OnInit {

  medias: FirebaseListObservable<any[]>;
  @Input() modalMode: boolean = false;
  @Input() selected: string = "";
  @Output() selectMedia = new EventEmitter(false);

  constructor(private mediaService: MediaService) {
    this.medias = this.mediaService.listMedia();
  }

  ngOnInit() {
  }

  delete(media: any) {
    let conf = confirm("Are you sure you want to delete? " + media.name);

    if (conf) {
      this.mediaService.removeMedia(media);
    }
  }

  select(media) {
    this.selectMedia.emit(media);
  }

}
