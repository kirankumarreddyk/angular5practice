import { Component, OnInit,ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
 // 2nd

 @ViewChild('autoShownModal') autoShownModal: ModalDirective;
 isModalShown: boolean = false;
 showModal(): void {
   this.isModalShown = true;
 }

 hideModal(): void {
   this.autoShownModal.hide();
 }

 onHidden(): void {
   this.isModalShown = false;
 }

 constructor() { }

 ngOnInit() {
 }

}
