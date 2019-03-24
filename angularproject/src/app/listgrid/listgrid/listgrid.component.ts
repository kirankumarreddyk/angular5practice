import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listgrid',
  templateUrl: './listgrid.component.html',
  styleUrls: ['./listgrid.component.css']
})
export class ListgridComponent implements OnInit {
  public carouselTileItems: Array<any>;
  public displayMode;
  public displayModeg;
  // public gridView = true;
  // public listView = false;

  constructor() { 
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
   
  }

  peopled: any[] = [
    {
      "name": "Douglasertheherh  Pace"
    },
    {
      "name": "Mcleoderherh  Mueller"
    },
    {
      "name": "Dayerhh  Meyers"
    },
    {
      "name": "Aguirre erhearh Ellis"
    },
    {
      "name": "Cookaerh  Tyson"
    }
  ];
   ngOnInit() {
    //  myHero = this.heroes[0];
  }
  onDisplayModeChange(mode: number): void {
    this.displayMode = mode;
    this.displayModeg = mode;
  }
  
}
