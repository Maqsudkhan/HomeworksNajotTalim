import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { CreateUser } from '../models/CreateUser';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  baseUrl: string = "https://localhost:7008/api/Users/";

  constructor(private http : HttpClient) { }

  getALL(): Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl + 'GetAllUsers');
  }

  create(data: CreateUser): Observable<CreateUser>{
    return this.http.post<CreateUser>(this.baseUrl + 'CreateUser', data)
  }

}
