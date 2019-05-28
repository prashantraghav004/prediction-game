import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatchesComponent } from './matches/matches.component';
import { AuthGuardService } from './auth-guard.service';
import { RulesComponent } from './rules/rules.component';
import { AdminComponent } from './admin/admin.component';
import { AdminGuardService } from './admin-guard.service';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { KnockoutComponent } from './knockout/knockout.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'matches',
        component: MatchesComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'rules',
        component: RulesComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AdminGuardService]
    },
    {
        path: 'leaderboard',
        component: LeaderboardComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'knockout',
        component: KnockoutComponent,
        canActivate: [AuthGuardService]
    }
];
