import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headername',
  templateUrl: './headername.component.html',
  styleUrls: ['./headername.component.css']
})
export class HeadernameComponent implements OnInit {

  constructor() { }
  selected: string;
  frenchWords: string[] = [
    'popularisé',
    'français',
    'intéressé',
    'générateur',
    'répandue',
    'répétition',
    'súper'
  ];

  ngOnInit() {
  }

}
