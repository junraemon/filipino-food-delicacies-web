import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MediaService } from './../../services/media.service';

@Component({
  selector: 'media-list-shared',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.scss']
})
export class MediaListComponent implements OnInit {

  media$: Observable<any>;
  mediaList: any[]
  @Input() modalMode: boolean = false;
  @Input() selected: string = "";
  @Output() selectMedia = new EventEmitter(false);

  constructor(private mediaService: MediaService) {
    this.media$ = this.mediaService.listMedia().map((arr) => arr.reverse());
    this.media$.subscribe(snapshot => {
      this.mediaList = snapshot;
    });
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
