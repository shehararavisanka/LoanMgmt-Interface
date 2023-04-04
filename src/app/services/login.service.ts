import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from 'app-global';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http:HttpClient){
  }
  login(dtset:any){
    let header = new HttpHeaders();
    header.set('Access-Control-Allow-Origin', '*');
    header.set('Content-Type','application/json')

    return this.http.post(Api+  'v1/users/byemail', dtset,{ headers: header }).toPromise();
  }

  register(dtset:any){
    let header = new HttpHeaders();
    header.set('Access-Control-Allow-Origin', '*');
    header.set('Content-Type','application/json')

    return this.http.post(Api+  'v1/users', dtset,{ headers: header }).toPromise();
  }


}
