import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userData$: any;
  userId: number;
  title: string = "User";

  constructor(private userService: UserService, private http: HttpClient) { }

  ngOnInit() {
    this.getUserData();
  }

  getUserData() {
    this.userService.getUsers()
      .subscribe(data => {
        this.userData$ = data;
        this.userId = data[0]['id'];
      });
  }
  showAlbums(userId) {
    this.userId = userId;
  }
}
