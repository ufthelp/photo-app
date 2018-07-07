import { Component, Input } from '@angular/core';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  @Input()
  userId: number;
  albumId: number;
  title: string = "Albums";
  albums: any;
  constructor(private albumService: AlbumService) { }

  /** Call service for each change */
  ngOnChanges() {
    this.getAlbumsData(this.userId);
  }
  getAlbumsData(userId) {
    this.albumService.getAlbums(userId)
      .subscribe(data => {
        this.albums = data;
      });
  }
  showPhotos(albumId) {
    this.albumId = albumId;
  }

}
