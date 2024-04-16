import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  baseUrl: string = "https://localhost:7008/api/Users/GetAllUsers";

  constructor(private http : HttpClient) { }

  getALL(): Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl);
  }
}
