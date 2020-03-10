import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetresponseService {

  Urlapi="http://dummy.restapiexample.com/api/v1/employees";
   constructor(private _http:HttpClient) { }
   userData(){
     return this._http.get<any>(this.Urlapi);
   }
}
