import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate { 

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.loginService.username && this.loginService.username.length > 0 && this.loginService.username === 'mTest') {
      return true;
    } else {
      this.router.navigate(['/'], {
        queryParams: {
          return: state.url
        }
      });
      return false;
    }
  }
}
