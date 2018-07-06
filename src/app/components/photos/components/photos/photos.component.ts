import { Component, OnInit, Input } from '@angular/core';
import { PhotosService } from '../services/photos.service';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  @Input()
  albumId:number;

  photos: any;

  constructor(private photosService:PhotosService) { }

  ngOnInit() {
    this.getPhotosData(this.albumId);
  }

  getPhotosData(albumId) {
    this.photosService.getPhotos(albumId)
      .subscribe(data => {
        this.photos = data;
        console.log(this.photos);
      });
  }
}
