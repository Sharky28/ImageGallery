import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  imageDetailLlist: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getImageDetailList(){
    this.imageDetailLlist = this.firebase.list('imageDetails');
  }

  insertImageDetails(imageDetails) {
    this.imageDetailLlist.push(imageDetails);
  }

}
