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

  constructor(private userService: UserService, private http: HttpClient) { }

  ngOnInit() {
    this.getUserData();
  }

  getUserData() {
    this.userService.getUsers()
      .subscribe(data => {
        this.userData$ = data;
        //console.log(this.userData$);
      });
  }
  showAlbums(userId){
    this.userId=userId;
  }
}
