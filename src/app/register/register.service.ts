import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { environment } from '../../environments/environment.prod';
import { ApiResult } from '../models/result';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  register(user: User): Observable<ApiResult> {
    return this.httpClient.post<ApiResult>(
      environment.apiHost + '/register',
      user,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}
