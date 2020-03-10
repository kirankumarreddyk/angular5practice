import { Component, OnInit } from '@angular/core';
import { AccordionConfig } from 'ngx-bootstrap/accordion';
import { HttpClient } from '@angular/common/http';
//2nd
export function getAccordionConfig(): AccordionConfig {
  return Object.assign(new AccordionConfig(), { closeOthers: true });
};
//2nd
@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css'],
//     2nd
     providers: [{ provide: AccordionConfig, useFactory: getAccordionConfig }]
   //  2nd
})
export class AccordianComponent implements OnInit {
  iscollapsed: boolean = true;
  public faqsarray: any[] = [];
  public queryString: any;

  constructor( private http: HttpClient) { 
    this.faqsarray = [{
      label: `How do I Bookmark profile?`,
      value: `In every profile that you view, you will see the blue colour Bookmark option. Click on the button to bookmark the profile for future reference. You may then choose from the list of filtered profiles from “Bookmarked Profiles” on the left pane to express interest in suitable profiles.`
    },
    {
      label: `How do I delete my profile? (Manage Profile)`,
      value: `You have to first login to your account in order to delete your profile. You can delete your profile including your picture by clicking on MY ACCOUNT => PROFILE SETTINGS => DELETE PROFILE available on both top and left pane in your dashboard. In there, enable the Edit button, mention the reason for deleting your profile and check the box “Delete my profile permanently.” And you are done.`
    },
    {
      label: `How do I edit profile?`,
      value: `When you click on the edit option (from MENU BAR => MY ACCOUNT => VIEW/EDIT MY PROFILE) from individual sections, you will be provided with a dialog box to enter the details. The entered information will be reviewed by Kaakateeya team and updated within 24 to 48 hours. `
    },
    {
      label: `When I am not interested in a profile, how do I denote that?`,
      value: `Go to view profile and click on NOT INTERESTED (icon <span>rh</span> symbol) to denote that. `
    },
    {
      label: `How do I overwrite/delete an existing photo? (Photograph)`,
      value: `If you have only one picture under your profile, you will not be able to delete that picture. Rather, we let you upload another picture using MY ACCOUNT => MANAGE PHOTO => Click to upload photo and then you are allowed to delete the existing picture. The uploaded picture will be reviewed by Kaakateeya team and updated within 24 to 48 hours.`
    },
    {
      label: `How do I register?`,
      value: `You can go to <a class="pkaaka" href="http://www.kaakateeya.com/registration" target="__blank" [routerLink]="['/http://www.kaakateeya.com/registration/']">http://www.kaakateeya.com/registration</a> directly to register. While registering, enter the details of the person for whom you are looking for an alliance (Bride/Groom).`
    },
    {
      label: `How do I restrict other members from viewing my Profile? (Manage Profile)`,
      value: `Sorry. “Hide Profile” feature is available only for exclusive members. If you want this feature, you will have to upgrade your membership to Kaakateeya Exclusive.`
    },
    ];
    this.collapseall();
  }
  expanall = function () {
    Array.from(this.faqsarray).forEach((item: any) => {
      item.styleanswer = true;
      item.activeClass = 'faqs_list_main_item active';
    });
  };
  collapseall = function () {
    Array.from(this.faqsarray).forEach((item: any) => {
      item.styleanswer = false;
      item.activeClass = 'faqs_list_main_item';
    });
  };
  toggleans = function (item) {
    item.styleanswer = !item.styleanswer;
    item.activeClass = (item.styleanswer === true ? 'faqs_list_main_item active' : 'faqs_list_main_item');
  };
  ngOnInit() {
  
  }
  // 3rd
  togglecollapse(){
    this.iscollapsed = !this.iscollapsed;
  }

}


