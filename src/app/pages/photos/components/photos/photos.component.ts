import { Component, Input } from '@angular/core';

import { PhotosService } from '../../services/photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {
  @Input()
  albumId: number;
  title: string = "Photos";
  photos: any;

  constructor(private photosService: PhotosService) { }

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
