import { Component, OnInit } from '@angular/core';
import { GetresponseService } from './getresponse.service';
@Component({
  selector: 'app-getresponse',
  templateUrl: './getresponse.component.html',
  styleUrls: ['./getresponse.component.css']
})
export class GetresponseComponent implements OnInit {

 user:any[];
  constructor(private userservice: GetresponseService) {}
  ngOnInit() {
    this.userservice.userData().subscribe(
      (res:any[])=>{
        this.user=res["data"];
          console.log(this.user);
      });

  }

}
