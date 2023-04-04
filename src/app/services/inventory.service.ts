import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from 'app-global';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(public http:HttpClient){
  }

  loadinventoryList(){
    let header = new HttpHeaders();
    header.set('Access-Control-Allow-Origin', '*');
    header.set('Content-Type','application/json') 

    return this.http.get(Api+  'v1/inventory' ,{ headers: header }) ;
  }
  saveinventoryList(dtset:any){
    let header = new HttpHeaders();
    header.set('Access-Control-Allow-Origin', '*');
    header.set('Content-Type','application/json') 
    return this.http.post(Api+  'v1/inventory' ,dtset,{ headers: header }).toPromise() ;
  }
  deleteinventoryList(dtset:any){
    let header = new HttpHeaders();
    header.set('Access-Control-Allow-Origin', '*');
    header.set('Content-Type','application/json') 
    return this.http.delete(Api+  'v1/inventory/' +dtset ).toPromise() ;
  }
  updateinventoryList(dtset:any){
    let header = new HttpHeaders();
    header.set('Access-Control-Allow-Origin', '*');
    header.set('Content-Type','application/json') 
    return this.http.put(Api+  'v1/inventory/'+dtset.id,dtset  ,{ headers: header }) ;
  }
}
