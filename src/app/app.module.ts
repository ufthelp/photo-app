import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import {MatListModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http'; 
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/components/users.component';
import { AlbumsComponent } from './components/albums/components/albums.component';
import { PhotosComponent } from './components/photos/components/photos/photos.component';

import { UserService } from './components/users/services/user.service';
import { AlbumService } from './components/albums/services/album.service';
import { PhotosService } from './components/photos/services/photos.service';
import { TableComponent } from './components/photos/components/table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AlbumsComponent,
    PhotosComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatListModule,
    MatPaginatorModule,
    MatTableModule,
  ],
  providers: [
    UserService,
    AlbumService,
    PhotosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
