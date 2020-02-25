import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from './User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //uri = '/users';
  uri = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }


  getUsers() {
    return this
           .http
           .get(`${this.uri}`);
  }

  addUser(user:User):Observable<Object>{
    return this
           .http.post(this.uri+"/add",user);
  }

  
}
