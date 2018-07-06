import { Component, OnInit, Input } from '@angular/core';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  @Input()
  userId:number;
  albumId:number;

  albums : any;
  constructor(private albumService :AlbumService) { }

  ngOnInit() {
    this.getAlbumsData(this.userId);
  }

  getAlbumsData(userId) {
    this.albumService.getAlbums(userId)
      .subscribe(data => {
        this.albums = data;
        console.log(this.albums);
      });
  }
  showPhotos(albumId){
    this.albumId=albumId;
    console.log(this.albumId);
  }

}
