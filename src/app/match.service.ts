import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatchResponse } from './models/match-response';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private httpClient: HttpClient) { }

  getMatches(): Observable<MatchResponse> {
    return this.httpClient.get<MatchResponse>('https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json');
  }
}
