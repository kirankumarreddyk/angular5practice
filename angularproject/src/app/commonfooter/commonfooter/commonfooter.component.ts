import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
@Component({
  selector: 'app-commonfooter',
  templateUrl: './commonfooter.component.html',
  styleUrls: ['./commonfooter.component.css']
})
export class CommonfooterComponent implements OnInit {
  public commonurlforclass = '';
  public footerhideurl = false;
  constructor(private __roter: Router) {
    this.__roter.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.commonurlforclass = event.url;
        if (event === undefined || event.url === undefined || event.url === '/' || event.url === '/' || event.url === '' ||
        event.url === '/sliders' )
        {
          this.footerhideurl = false;
        } else {
          this.footerhideurl = true;
        }
      }
    });
   }

  ngOnInit() {
  }

}
