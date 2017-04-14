import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'media-modal-shared',
  templateUrl: './media-modal.component.html',
  styleUrls: ['./media-modal.component.scss']
})
export class MediaModalComponent implements OnInit {

  @Input() modalMode: boolean = false;
  @Input() selectedMedia: string = "";
  @Output() selectMediaModal = new EventEmitter(false);
  @ViewChild('browseImageModal') public browseImageModal: ModalDirective;

  constructor() { }

  ngOnInit() { }

  selectMedia(media) {
    this.selectedMedia = media.url;
    this.selectMediaModal.emit(media);
    this.browseImageModal.hide();
  }
}
