import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from 'app-global';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  constructor(public http:HttpClient){
  }

  
  loadbrandsList(){
    let header = new HttpHeaders();
    header.set('Access-Control-Allow-Origin', '*');
    header.set('Content-Type','application/json') 

    return this.http.get(Api+  'v1/brands' ,{ headers: header }) ;
  }
  savebrandsList(dtset:any){
    let header = new HttpHeaders();
    header.set('Access-Control-Allow-Origin', '*');
    header.set('Content-Type','application/json') 
    return this.http.post(Api+  'v1/brands' ,dtset,{ headers: header }).toPromise() ;
  }
  deletebrandsList(dtset:any){
    let header = new HttpHeaders();
    header.set('Access-Control-Allow-Origin', '*');
    header.set('Content-Type','application/json') 
    return this.http.delete(Api+  'v1/brands/' +dtset ).toPromise() ;
  }
  updatebrandsList(dtset:any){
    let header = new HttpHeaders();
    header.set('Access-Control-Allow-Origin', '*');
    header.set('Content-Type','application/json') 
    return this.http.put(Api+  'v1/brands/'+dtset.id,dtset  ,{ headers: header }) ;
  }
}
