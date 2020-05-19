import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './user';
import {catchError} from 'rxjs/operators';
import {throwError}  from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  postData(e){
   return this.http.post("http://localhost:3000/posts",e)
   .pipe(catchError(this.errorHandler))
  }
  get():Observable<User[]>{
    return this.http.get<User[]>("http://localhost:3000/posts")
  
  }
  errorHandler(error:HttpErrorResponse){
     return throwError(error);
  }
}
