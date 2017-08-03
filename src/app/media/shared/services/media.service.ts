import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FileItem } from './../models/file-item.model';
import * as firebase from 'firebase';
import * as _ from 'lodash';

@Injectable()
export class MediaService {

  private IMAGES_FOLDER: string = 'images';
  mediaList$: FirebaseListObservable<any[]>;
  storageRef: any;
  constructor(public af: AngularFireDatabase) {
    this.storageRef = firebase.storage().ref();
    this.mediaList$ = this.af.list(`/${this.IMAGES_FOLDER}`, {
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
        (snapshot: any) => item.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        (error) => { },
        (): undefined => {
          item.url = uploadTask.snapshot.downloadURL;
          item.isUploading = false;
          this.saveImage({
            name: item.file.name,
            url: item.url,
            date: firebase.database.ServerValue.TIMESTAMP
          });
          return;
        }
      );

    });

  }

  private saveImage(image: any) {
    this.af.list(`/${this.IMAGES_FOLDER}`).push(image);
  }

}
