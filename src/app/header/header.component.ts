import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
Data :any={}
  constructor( private cookieService: CookieService) {
    // const loginData: any = this.cookieService.getObject('LoginResponse');
   }

  ngOnInit() {
    const loginData: any = this.cookieService.getObject('LoginResponse');
    console.log( JSON.stringify(loginData) )
this.Data = loginData;
  }
  logout() {
    window.location.href = '';
    this.cookieService.removeAll();
  }

}
