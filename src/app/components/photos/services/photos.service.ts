import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPhotos } from '../models/photos.model';


@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }
  /**
 * This is the getPhotos function
 * @returns returns an object of Photos
 */
  getPhotos(albumId) {
    return this.http.get<IPhotos>(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
  }
}
