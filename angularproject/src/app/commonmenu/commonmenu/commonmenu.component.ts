import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
@Component({
  selector: 'app-commonmenu',
  templateUrl: './commonmenu.component.html',
  styleUrls: ['./commonmenu.component.css']
})
export class CommonmenuComponent implements OnInit {
  public commonurlforclass = '';
  public menuhideurl = false;
  constructor(private __roter: Router) { 
    this.__roter.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.commonurlforclass = event.url;
        if (event === undefined || event.url === undefined || event.url === '/' || event.url === '/' || event.url === '' ||
          event.url === '/sliders' 
        ) {
          this.menuhideurl = false;
        } else {
          this.menuhideurl = true;
          // this.DashboardCountGLS = JSON.parse(localStorage.getItem('DashboardCountLS'));
        }
        // const stringtoken = this.auth.getToken();
        // if (stringtoken !== undefined && stringtoken !== '' && stringtoken !== null && event.url.indexOf('/registration/CreatePwd') === -1 && event.url.indexOf('/registration/confirmEmail') === -1) {
        //   this.tokenmenu = true;
        // } else {
        //   this.tokenmenu = false;
        // }
        // this.logininforamtiom = JSON.parse(localStorage.getItem('LoginInfo'));
        // this.logininforamtiom = this.logininforamtiom !== null && this.logininforamtiom !== undefined && this.logininforamtiom !== '' ?
        //   this.logininforamtiom : null;
        // if (this.logininforamtiom !== null) {
        //   this.OtherSidetext = this.logininforamtiom.GenderID === 1 ? 'Bride Side' : 'Groom Side';
        // }
        // else {
        //   this.OtherSidetext = 'Other Side';
        // }
      }
  });
  }
  ngOnInit() {
  }

}
