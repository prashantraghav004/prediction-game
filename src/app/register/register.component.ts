import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Message } from 'primeng/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {

  msgs: Message[] = [];
  user: User;
  confirmPassword: string;

  constructor(private messageService: MessageService, private registerService: RegisterService) {
    this.user = <User>{};
  }

  ngOnInit() {
  }

  register() {
    if (this.user.password === this.confirmPassword) {
      this.registerService.register(this.user).subscribe(
        (result) => {
          this.addGrowl('success', 'Registration Succesful', 'Please login');
        },
        (error) => {
          console.log(error);
          this.addGrowl('error', 'Something went wrong', error.statusText);
        }
      );
    } else {
      this.addGrowl('error', 'Validation failed', 'password and confirm password are not same');
    }

  }

  addGrowl(severity: string, summary: string, detail: string) {
    this.messageService.add({ severity: severity, summary: summary, detail: detail });
  }

}
