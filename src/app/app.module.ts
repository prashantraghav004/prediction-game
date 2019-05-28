import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { GrowlModule } from 'primeng/growl';
import { HttpClientModule } from '@angular/common/http';
import {CarouselModule} from 'primeng/carousel';
import {RadioButtonModule} from 'primeng/radiobutton';
import {SelectButtonModule} from 'primeng/selectbutton';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { appRoutes } from './route.config';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/components/common/messageservice';
import { MatchesComponent } from './matches/matches.component';
import { LoginService } from './login/login.service';
import {DialogModule} from 'primeng/dialog';
import { RulesComponent } from './rules/rules.component';
import { AdminComponent } from './admin/admin.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { KnockoutComponent } from './knockout/knockout.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    MatchesComponent,
    RulesComponent,
    AdminComponent,
    LeaderboardComponent,
    KnockoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    InputTextModule,
    PasswordModule,
    ButtonModule,
    FormsModule,
    GrowlModule,
    HttpClientModule,
    RouterModule,
    CarouselModule,
    RadioButtonModule,
    DialogModule,
    SelectButtonModule,
    ProgressSpinnerModule,
    CardModule,
    TableModule
  ],
  providers: [
    MessageService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
