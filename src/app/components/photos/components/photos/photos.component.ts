import { Component, Input,ViewChild } from '@angular/core';

import { PhotosService } from '../../services/photos.service';

@Component({
  selector: 'app-photos',              
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent  {
  @Input()
  albumId:number;

  photos: any;

  displayedColumns: string[] = ['title', 'url'];

  constructor(private photosService:PhotosService) { }

  ngOnChanges() {
    this.getPhotosData(this.albumId);
  }

  getPhotosData(albumId) {
    this.photosService.getPhotos(albumId)
      .subscribe(data => {
        this.photos = data;
      });
  }
}
