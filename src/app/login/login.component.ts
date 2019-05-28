import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { User } from '../models/user';
import { LoginService } from './login.service';
import { Message } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})
export class LoginComponent implements OnInit {

  msgs: Message[] = [];
  user: User;
  constructor(
    private messageService: MessageService,
     private loginService: LoginService,
     private router: Router
    ) {
    this.user = <User>{};
  }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.user).subscribe(
      (result) => {
        if (result.result) {
          this.loginService.username = this.user.username;
          this.addGrowl('success', 'Login Success', '');
          this.router.navigate(['/knockout']);
        } else {
          this.addGrowl('warn', 'Login Failed', 'incorrect username or password');
        }
      },
      (error) => {
        console.log(error);
        this.addGrowl('error', 'Something went wrong', error.statusText);
      }
    );
  }

  addGrowl(severity: string, summary: string, detail: string) {
    this.messageService.add({ severity: severity, summary: summary, detail: detail });
  }

}
