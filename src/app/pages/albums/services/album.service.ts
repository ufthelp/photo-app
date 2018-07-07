import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IAlbums } from '../models/albums.model';
import { ApiUrls } from '../../../url.enum';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }
  /**
 * This is the getAlbums function
 * @returns returns an object of users
 */
  getAlbums(userId) {
    return this.http.get<IAlbums>(`${ApiUrls.getAlbums}=${userId}`)
  }
}
