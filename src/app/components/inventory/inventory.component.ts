import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BrandsService } from 'src/app/services/brands.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { InventoryService } from 'src/app/services/inventory.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent { 
    details:any=[
      {BrandId:"1",Branddescr:"Pro 2 Gen", Cateid:"1", Catedescr:"Airpod",ProdId:"1",ProdDesc:"Apple"},
      {BrandId:"2",Branddescr:"11 Pro Max", Cateid:"2", Catedescr:"Phone",ProdId:"1",ProdDesc:"Apple"},
      { BrandId:"3",Branddescr:"i5",Cateid:"3", Catedescr:"Watch",ProdId:"1",ProdDesc:"Apple"}
    ];
    mode:string="Create";
     invlist=new  InvList();
    pointmargin:string="";
  
    ProdDetails:any=[
      {ProdId:"1",ProdDesc:"Apple"},
      {ProdId:"2",ProdDesc:"Samsung"}
    ];
    CateDetails:any=[
      {Cateid:"1", Catedescr:"Airpod",ProdId:"1"},
      {Cateid:"2", Catedescr:"Phone",ProdId:"1"}
    ];
    BrandDetails:any=[
      {brandId:"1", brandname:"Pro 2 Gen",Cateid:"1"},
      {brandId:"2", brandname:"Pro 3 Gen",Cateid:"1"}
    ];


    constructor(public catserv: CategoriesService, private tost: ToastrService,public prod:ProductService,public brandserv:BrandsService,public invserv:InventoryService) {
      this.loaddata();
      this.loadproduct();
      this.loadCatdetails();
      this.loadatabrand();
    }
  
    loaddata() {
      this.invserv.loadinventoryList().subscribe(ret => {
        this.details = ret; 
      });
    }
    loadatabrand(){
       this.brandserv.loadbrandsList().subscribe(ret => {
        this.BrandDetails = ret; 
      });
    }
    loadCatdetails(){
      this.catserv.loadcategoryList().subscribe(ret => {
        this.CateDetails = ret; 
      });
    }
    loadproduct(){
      this.prod.loadproductList().subscribe((ret) => {
        console.log(ret);
        this.ProdDetails=ret;
        
      });
    } 
    onEdit(rt1:number, rt2:any){
  
      if(rt1==1){
        console.log('rt2',rt2);
        this.invlist=rt2;
        this.mode="Update";
      }else {
        this.invlist=rt2;
      }
  
    }

    ondelete(){ 
      this.invserv.deleteinventoryList(this.invlist.id).then(ret => {
        this.loaddata();
       
          this.tost.success("Successfully Deleted!");
          this.invlist = new InvList();
        
      });
    }
    onClearclick(){
      this.invlist=new  InvList();
      this.mode="Create"
    }
    onCreateorUpdateclick(){

      
    if (this.invlist.categoryname == "") {
      this.tost.warning("Category Name cannot empty");
    } else if (this.invlist.productname == "") {
      this.tost.warning("product Name cannot empty");
    }else if (this.invlist.brandname == "") {
      this.tost.warning("Brand Name cannot empty");
    } else if (this.invlist.quantity >0) {
      this.tost.warning("Quantity must greater than 0");
    }  else {


      if (this.mode == "Create") {
        this.invserv.saveinventoryList(this.invlist).then(ret => {
          this.loaddata();
          if (ret) {
            this.tost.success("Successfully Created!");
            this.invlist = new InvList();
          }
        });
      } else {
        this.invserv.updateinventoryList(this.invlist).subscribe(ret => {
          this.loaddata();
          if (ret) {
            this.tost.success("Successfully Updated!");
            this.invlist = new InvList();
          }
        });
      }
    }
    } 
  }
  
  export class  InvList{
     id:number=0;
     brandname:string="";
     productname:string="";
     categoryname:string="";
     quantity:number=0;
    constructor(){
      this.id=0;
      this.brandname="";
      this.productname="";
      this.categoryname="";
      this.quantity=0;
  
    }
  
  }
  