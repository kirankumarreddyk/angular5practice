import { Component, OnInit, ViewChild } from '@angular/core';
import { Capchainterface } from './../capcha/capcha.interface';
import { RecaptchaComponent } from 'ng-recaptcha';
import { environment} from '../../../environments/environment';
@Component({
  selector: 'app-capcha',
  templateUrl: './capcha.component.html',
  styleUrls: ['./capcha.component.css']
})
export class CapchaComponent implements OnInit {
  public feedbackobj: Capchainterface;
  @ViewChild('captchaRef') captchaRef: RecaptchaComponent;
  public siteKey = environment.sitekey;
  constructor() { }

  ngOnInit() {
    this.feedbackobj = {
      captcha: ''
  };
  }
  

}
