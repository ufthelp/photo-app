import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatListModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

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
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatListModule,
    MatPaginatorModule,
    MatTableModule,
    MatToolbarModule,
  ],
  providers: [
    UserService,
    AlbumService,
    PhotosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
