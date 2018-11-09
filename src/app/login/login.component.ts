import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CookieService } from 'angular2-cookie/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DepartmentService } from '../../services/department.service';
import { AuthGuardService } from '../auth-guard.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginResponse: any = [];
  token: any
  constructor(private router: Router, private authGuard: AuthGuardService, private cookieService: CookieService, private GS: DepartmentService) { }

  ngOnInit() {
  }
  login(t) {
    if(t.value.email=="primary@gmail.com" && t.value.password == "123456"){
      this.router.navigate(['primary']);
    } else if(t.value.email=="secondary@gmail.com" && t.value.password == "123456"){
      this.router.navigate(['secondary']);
    }else{
      this.router.navigate(['']);
    }
    // this.authGuard.postLogin(t.value).subscribe(data => {
    //   this.loginResponse = data;
    //   this.token = this.loginResponse.jwtToken;
    //   this.authGuard.finishAuthentication(this.token, this.loginResponse);
    //   this.cookieService.putObject('LoginResponse', this.loginResponse);
    //   this.GS.success("Successfully Logged In!");

    // }, error => {
    //   this.GS.warn("Please Enter valid username and password","Invalid");
    //   this.loginResponse = error.statusText
    //   window.setTimeout(function () {
    //     $(".alert").fadeTo(500, 0).slideUp(500, function () {
    //       $(this).remove();
    //     });
    //   }, 2000);
    // });

  }


}
