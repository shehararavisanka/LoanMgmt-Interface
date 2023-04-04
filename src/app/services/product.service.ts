import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from 'app-global';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient){
  }
  loadproductList(){
    let header = new HttpHeaders();
    header.set('Access-Control-Allow-Origin', '*');
    header.set('Content-Type','application/json') 
    return this.http.get(Api+  'v1/product' ,{ headers: header }) ;
  }
  saveproductList(dtset:any){
    let header = new HttpHeaders();
    header.set('Access-Control-Allow-Origin', '*');
    header.set('Content-Type','application/json') 
    return this.http.post(Api+  'v1/product' ,dtset,{ headers: header }).toPromise() ;
  }
  deleteproductList(dtset:any){
    let header = new HttpHeaders();
    header.set('Access-Control-Allow-Origin', '*');
    header.set('Content-Type','application/json') 
    return this.http.delete(Api+  'v1/product/' +dtset ).toPromise() ;
  }
  updateproductList(dtset:any){
    let header = new HttpHeaders();
    header.set('Access-Control-Allow-Origin', '*');
    header.set('Content-Type','application/json') 
    return this.http.put(Api+  'v1/product/'+dtset.id,dtset  ,{ headers: header }) ;
  }
}
