import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.css']
})
export class SlidersComponent implements OnInit {
  public carouselOne: NgxCarousel;
  public carouselTileItems: Array<any>;
  public carouselTile: NgxCarousel;
  // interval: false
  constructor() { }

  ngOnInit() {
    this.carouselOne = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
      slide: 1,
      speed: 400,
      interval: 4000,
      animation: 'lazy',
      point: {
        visible: false
      },
      easing: 'ease',
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    };
    // 2nd slider
    this.carouselTileItems = [
      { image: 'assets/images/01.jpg', profileid: '2458741', caste: '0,Hindu, India' },
      { image: 'assets/images/02.jpg', profileid: '2458741', caste: '0,Hindu, India' },
      { image: 'assets/images/03.jpg', profileid: '2458741', caste: '0,Hindu, India' },
      { image: 'assets/images/04.jpg', profileid: '2458741', caste: '0,Hindu, India' },
      { image: 'assets/images/01.jpg', profileid: '2458741', caste: '0,Hindu, India' },
      { image: 'assets/images/02.jpg', profileid: '2458741', caste: '0,Hindu, India' },
      { image: 'assets/images/03.jpg', profileid: '2458741', caste: '0,Hindu, India' },
      { image: 'assets/images/04.jpg', profileid: '2458741', caste: '0,Hindu, India' },
      { image: 'assets/images/01.jpg', profileid: '2458741', caste: '0,Hindu, India' },
      { image: 'assets/images/02.jpg', profileid: '2458741', caste: '0,Hindu, India' },
      { image: 'assets/images/03.jpg', profileid: '2458741', caste: '0,Hindu, India' }];
    this.carouselTile = {
      grid: { xs: 2, sm: 2, md: 2, lg: 6, all: 0 },
      slide: 1,
      speed: 400,
      // animation: 'lazy',
      point: {
        visible: false,
        pointStyles: `
      .ngxcarouselPoint {
        list-style-type: none;
        text-align: center;
        padding: 12px;
        margin: 0;
        white-space: nowrap;
        overflow: auto;
        box-sizing: border-box;
      }
      .ngxcarouselPoint li {
        display: inline-block;
        border-radius: 50%;
        border: 2px solid rgba(0, 0, 0, 0.55);
        padding: 4px;
        margin: 0 3px;
        transition-timing-function: cubic-bezier(.17, .67, .83, .67);
        transition: .4s;
      }
      .ngxcarouselPoint li.active {
          background: #6b6b6b;
          transform: scale(1.2);
      }
    `
      },
      load: 2,
      touch: true,
      loop: true,
      easing: 'ease',
    };
     // 2nd slider
  }
  public myfunc(event: Event) {
    // carouselLoad will trigger this funnction when your load value reaches
    // it is helps to load the data by parts to increase the performance of the app
    // must use feature to all carousel
  };

  // 2nd slider
  
  public carouselTileLoad(evt: any) {
    // const len = this.carouselTileItems.length;
    // if (len <= 30) {
    //   for (let i = len; i < len + 10; i++) {
    //     this.carouselTileItems.push(i);
    //   }
    // }

  }
    // 2nd slider

}
