import { Component, OnInit } from '@angular/core';
import { Leader } from '../models/leader';
import { LeaderService } from './leader.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css'],
  providers: [LeaderService]
})
export class LeaderboardComponent implements OnInit {

  users: Array<Leader>;
  constructor(private leaderService: LeaderService) { }

  ngOnInit() {
    this.leaderService.getUsers()
      .subscribe(
        (response) => {
          this.users = response;
        },
        (err) => {
          console.log(err);
        }
      );
  }

}
