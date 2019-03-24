import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-showhide',
  templateUrl: './showhide.component.html',
  styleUrls: ['./showhide.component.css']
})
export class ShowhideComponent implements OnInit {
  headerarray = ['Basic Details', 'Education And Profession Details', 'Family Details'];
  bindarray: any;
  btntext = 'Edit';
  bannershows = false;

  //1 start
  divhide: Boolean = true;
  //1 end

  // 2 start
  divfhide: Boolean = true;
  // 2 end

  // 3 start
  showbhide: Boolean = true;
  public show: boolean = false;
  public buttonName: any = 'Show';
  toggle() {
    this.show = !this.show;
    if (this.show)
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
  // 3 end 

  constructor(private __router: Router) {
    this.dynamicbind('Basic Details');
   }
  //routerlink login start
  redirectpages(typeofpage) {
    if (typeofpage === 'login') {
      this.__router.navigateByUrl('/login');
    }
  }
   //routerlink login end
  ngOnInit() {
    setTimeout(() => {
      this.bannershows = true;
    }, 100);
  }

  // 4 start

  showhidectrls(txt) {
    if (txt === 'Edit') {
      this.btntext = 'Close';
    } else {
      this.btntext = 'Edit';
    }
  }
  dynamicbind(type) {
    switch (type) {
      case 'Basic Details':
        this.btntext = 'Edit';
        this.bindarray = [];
        this.bindarray = this.arrayobject[0];
        break;
      case 'Education And Profession Details':
        this.btntext = 'Edit';
        this.bindarray = [];
        this.bindarray = this.arrayobject[1];
        break;
      case 'Family Details':
        this.btntext = 'Edit';
        this.bindarray = [];
        this.bindarray = this.arrayobject[2];
        break;
    }
  }
  arrayobject = [{ item: 'Basic Details', value: 'hghdgajdjd' },
  { item: 'Education And Profession Details', value: 'hghdgajdjd' },

  { item: 'Family Details', value: 'hghdgajdjd' },
  { item: 'Religion Details', value: 'hghdgajdjd' },

  { item: 'Partner Preference Details', value: 'hghdgajdjd' },

  { item: 'Astro Details', value: 'hghdgajdjd' },

  { item: 'Property Details', value: 'hghdgajdjd' },
  { item: 'Relative Details', value: 'hghdgajdjd' },
  { item: 'References', value: 'hghdgajdjd' }
  ];
  // 4 end


}