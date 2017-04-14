import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FileItem } from './../models/file-item.model';
import * as firebase from 'firebase';
import * as _ from 'lodash';

@Injectable()
export class MediaService {

  private IMAGES_FOLDER: string = 'images';
  mediaList$: FirebaseListObservable<any[]>;
  storageRef: any;
  constructor(public af: AngularFire) {
    this.storageRef = firebase.storage().ref();
    this.mediaList$ = this.af.database.list(`/${this.IMAGES_FOLDER}`, {
      query: {
        orderByChild: 'date',
      }
    });
  }

  listMedia(): FirebaseListObservable<any[]> {
    return this.mediaList$;
  }

  removeMedia(media) {
    let deleteRef = this.storageRef.child(`${this.IMAGES_FOLDER}/${media.name}`);
    deleteRef.delete().then(() => {
      this.mediaList$.remove(media.$key);
    })
  }

  uploadImagesToFirebase(files: Array<FileItem[]>) {

    _.each(files, (item: FileItem) => {

      item.isUploading = true;
      let uploadTask: firebase.storage.UploadTask = this.storageRef.child(`${this.IMAGES_FOLDER}/${item.file.name}`).put(item.file);

      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => item.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        (error) => { },
        () => {
          item.url = uploadTask.snapshot.downloadURL;
          item.isUploading = false;
          this.saveImage({
            name: item.file.name,
            url: item.url,
            date: firebase.database.ServerValue.TIMESTAMP
          });
        }
      );

    });

  }

  private saveImage(image: any) {
    this.af.database.list(`/${this.IMAGES_FOLDER}`).push(image);
  }

}
