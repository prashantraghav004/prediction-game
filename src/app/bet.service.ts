import { Injectable } from '@angular/core';
import { Bet } from './models/bet';
import { Observable } from 'rxjs';
import { ApiResult } from './models/result';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BetService {

  constructor(private httpClient: HttpClient) { }

  submitBet(bet: Bet): Observable<ApiResult> {
    return this.httpClient.post<ApiResult>(
      environment.apiHost + '/bet',
      bet,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}
