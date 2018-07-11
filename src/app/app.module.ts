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
import { UsersComponent } from './pages/users';
import { AlbumsComponent } from './pages/albums';
import { PhotosComponent } from './pages/photos';

import { UserService } from './pages/users';
import { AlbumService } from './pages/albums';
import { PhotosService } from './pages/photos';
import { CardColorDirective } from './directive/card-color.directive';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AlbumsComponent,
    PhotosComponent,
    CardColorDirective
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
