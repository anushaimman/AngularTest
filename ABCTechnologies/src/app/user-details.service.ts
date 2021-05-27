import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { IUserDetails} from './UserDetails'

import { Observable } from 'rxjs/internal/Observable';
import  { throwError } from 'rxjs/internal/observable/throwError'
import { catchError } from 'rxjs/operators'
import { using } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserDEtailsService {

  private _url: string = "https://api.github.com/users";

public urlData : any ;

  constructor(private http:HttpClient) { }

  getUserDetails():Observable<IUserDetails[]>  {  return this.http.get<IUserDetails[]>(this._url).pipe(
     catchError((error: HttpErrorResponse) => {      return throwError(error .message || 'server error');  })  )  }

}
