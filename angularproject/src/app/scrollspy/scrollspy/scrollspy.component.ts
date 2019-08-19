import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrollspy',
  templateUrl: './scrollspy.component.html',
  styleUrls: ['./scrollspy.component.css']
})
export class ScrollspyComponent implements OnInit {

  constructor() { }
  currentSection = 'section1';

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section) {
    document.querySelector('#' + section)
    .scrollIntoView();
  }

  ngOnInit() {
  }

}
