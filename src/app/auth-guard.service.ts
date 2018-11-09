import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'angular2-cookie/core';
import { HttpClient } from '@angular/common/http';
import { AppURL } from '../url'
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router, private cookieService: CookieService, private httpClient: HttpClient) { }
  postLogin(loginData) {
    return this.httpClient.post(AppURL.api1 + `citizens/login`, loginData)
      .pipe(map((res: Response) => res));
  }
  isAuthenticated(): boolean {
    if (this.cookieService.getObject('token')) {
      return true;
    } else {
      return false;
    }
  }
  canActivate() {

    if (this.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['']);
    }
  }
  finishAuthentication(token, loginResponce): void {
    this.cookieService.putObject('token', token);
    // localStorage.setItem('token', token);
    if (loginResponce.id) {
      this.router.navigate(['IncidentLogin']);
      // window.location.reload();

    } else {
      this.router.navigate(['']);
      // this.logout();
    }
  }
}
