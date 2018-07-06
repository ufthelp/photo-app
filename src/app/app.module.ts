import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatListModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/components/users.component';
import { AlbumsComponent } from './components/albums/components/albums.component';
import { PhotosComponent } from './components/photos/components/photos/photos.component';

import { UserService } from './components/users/services/user.service';
import { AlbumService } from './components/albums/services/album.service';
import { PhotosService } from './components/photos/services/photos.service';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AlbumsComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatListModule,
  ],
  providers: [
    UserService,
    AlbumService,
    PhotosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
