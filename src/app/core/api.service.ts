import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environments';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  Post(data:any,url:any)
  {
    return this.http.post(`${environment.baseURL}${url}`,data)
  
  }
  get(data:any,url:any){
    return this.http.get(`${environment.baseURL}${url}`,data)
  }
}
