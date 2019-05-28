import { Component, OnInit } from '@angular/core';
import { MatchService } from '../match.service';
import { MatchResponse } from '../models/match-response';
import { BetService } from '../bet.service';
import { Match } from '../models/match';
import { SelectItem, Message } from 'primeng/api';
import { LoginService } from '../login/login.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { Bet } from '../models/bet';

@Component({
  selector: 'app-knockout',
  templateUrl: './knockout.component.html',
  styleUrls: ['./knockout.component.css'],
  providers: [MatchService,BetService]
})
export class KnockoutComponent implements OnInit {

  matchResponse: MatchResponse;
  isLoaded = false;
  selectedMatch: Match;
  display = false;
  results: SelectItem[];
  selectedResult: string;
  selectedGroup: string;
  msgs: Message[] = [];
  now = new Date();
  todayDate = new Date().setHours(0, 0, 0, 0);
  constructor(private matchService: MatchService,
    private betService: BetService,
    private loginService: LoginService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.results = [
      { label: 'Win', value: 'W', icon: 'pi pi-check' },
      { label: 'Draw', value: 'D' },
      { label: 'Loose', value: 'L', icon: 'pi pi-times' }
    ];
    this.matchService.getMatches().subscribe(
      (response) => {
        this.matchResponse = response;
        console.log(this.matchResponse.groups.a.matches[1].date);
        this.isLoaded = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  
  selectMatch(match: Match, groupname: string) {
    this.selectedMatch = match;
    this.selectedGroup = groupname;
    this.display = true;
  }

  submitBet() {
    if (this.selectedResult && this.selectedResult.length > 0) {
      const bet: Bet = <Bet>{};
      bet.matchId = this.selectedGroup + '_' + this.selectedMatch.home_team + '_' + this.selectedMatch.away_team;
      bet.bet = this.selectedResult;
      bet.username = this.loginService.username;
      console.log(bet);
      this.betService.submitBet(bet).subscribe(
        (result) => {
          if (result.result && result.result === 'success') {
            this.display = false;
            this.selectedResult = '';
            this.addGrowl('success', 'Bet Submitted', '');
          } else {
            this.addGrowl('warn', 'Failed', 'Internal Server Error');
          }
        },
        (error) => {
          console.log(error);
          this.addGrowl('error', 'Something went wrong', error.statusText);
        }
      );
    } else {
      this.addGrowl('error', 'Please select result', '');
    }

  }

  addGrowl(severity: string, summary: string, detail: string) {
    this.messageService.add({ severity: severity, summary: summary, detail: detail });
  }

  checkDate(date: Date): boolean {
    return new Date(date) >= this.now;
  }

  checkToday(date: string): boolean {
    return new Date(date).setHours(0, 0, 0, 0) === this.todayDate;
  }

}
