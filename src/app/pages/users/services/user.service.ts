import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { IUsers } from '../models/users.model';
import { ApiUrls } from '../../../url.enum';

@Injectable()
export class UserService {
  constructor(
    private http: HttpClient) {
  }
  /**
  * This is the getUser function
  * @returns returns an object of users
  */
  getUsers(){
    return this.http.get<IUsers>(ApiUrls.getUsers)
  }
  /**
  * This is the errorHandler function
  * @returns returns an error
  */
  errorHandler() {
    return Observable.throw("Error getting Users");
  }
}

