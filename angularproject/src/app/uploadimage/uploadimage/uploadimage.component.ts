import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Subscriber } from 'rxjs';
@Component({
  selector: 'app-uploadimage',
  templateUrl: './uploadimage.component.html',
  styleUrls: ['./uploadimage.component.css']
})
export class UploadimageComponent implements OnInit {
  selectedFile = null;
  constructor(private http: HttpClient) { }
  onfileselected(event){
    // console.log(event)
this.selectedFile = event.target.file[0];
  }
  ngOnInit() {
  }
  onupload(){
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post('url', fd, {
      reportProgress: true,
      observe: 'events'
    })
    .subscribe (res => {
      console.log(res)
    })
  }

}
