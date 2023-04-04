import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from 'app-global';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  
  constructor(public http:HttpClient){
  }

  
  loadcategoryList(){
    let header = new HttpHeaders();
    header.set('Access-Control-Allow-Origin', '*');
    header.set('Content-Type','application/json') 

    return this.http.get(Api+  'v1/category' ,{ headers: header }) ;
  }
  savecategoryList(dtset:any){
    let header = new HttpHeaders();
    header.set('Access-Control-Allow-Origin', '*');
    header.set('Content-Type','application/json') 
    return this.http.post(Api+  'v1/category' ,dtset,{ headers: header }).toPromise() ;
  }
  deletecategoryList(dtset:any){
    let header = new HttpHeaders();
    header.set('Access-Control-Allow-Origin', '*');
    header.set('Content-Type','application/json') 
    return this.http.delete(Api+  'v1/category/' +dtset ).toPromise() ;
  }
  updatecategoryList(dtset:any){
    let header = new HttpHeaders();
    header.set('Access-Control-Allow-Origin', '*');
    header.set('Content-Type','application/json') 
    return this.http.put(Api+  'v1/category/'+dtset.id,dtset  ,{ headers: header }) ;
  }
}
