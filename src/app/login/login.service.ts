import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from '../../environments/environment';
import { ApiResult } from '../models/result';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _username: string;
  public get username(): string {
    return this._username;
  }
  public set username(v: string) {
    this._username = v;
  }

  constructor(private httpClient: HttpClient) { }

  login(user: User): Observable<ApiResult> {
    return this.httpClient.post<ApiResult>(
      environment.apiHost + '/login',
      user,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}
