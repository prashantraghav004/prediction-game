import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { Leader } from '../models/leader';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Array<Leader>> {
    return this.http.get<Array<Leader>>(environment.apiHost + '/users');
  }
}
