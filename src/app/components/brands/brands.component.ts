import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BrandsService } from 'src/app/services/brands.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent {
  details:any=[
    {BrandId:"1",Branddescr:"Pro 2 Gen", Cateid:"1", Catedescr:"Airpod",ProdId:"1",ProdDesc:"Apple"},
    {BrandId:"2",Branddescr:"11 Pro Max", Cateid:"2", Catedescr:"Phone",ProdId:"1",ProdDesc:"Apple"},
    { BrandId:"3",Branddescr:"i5",Cateid:"3", Catedescr:"Watch",ProdId:"1",ProdDesc:"Apple"}
  ];
  mode:string="Create";
   brandlist=new  BrandList();
  pointmargin:string="";

  ProdDetails:any=[
    {ProdId:"1",ProdDesc:"Apple"},
    {ProdId:"2",ProdDesc:"Samsung"}
  ];
  CateDetails:any=[
    {Cateid:"1", Catedescr:"Airpod",ProdId:"1"},
    {Cateid:"2", Catedescr:"Phone",ProdId:"1"}
  ];


   
  constructor(public catserv: CategoriesService, private tost: ToastrService,public prod:ProductService,public brandserv:BrandsService) {
    this.loaddata();
    this.loadproduct();
    this.loadCatdetails();
  }

  loaddata() {
    this.brandserv.loadbrandsList().subscribe(ret => {
      this.details = ret; 
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
      this.brandlist=rt2;
      this.mode="Update";
    }else {
      this.brandlist=rt2;
    }

  }

  ondelete(){ 
    this.brandserv.deletebrandsList(this.brandlist.id).then(ret => {
      this.loaddata();
     
        this.tost.success("Successfully Deleted!");
        this.brandlist = new BrandList();
      
    });
  }

  onClearclick(){
    this.brandlist=new  BrandList();
    this.mode="Create"
  }
  onCreateorUpdateclick(){

    if (this.brandlist.categoryname == "") {
      this.tost.warning("Category Name cannot empty");
    } else if (this.brandlist.productname == "") {
      this.tost.warning("product Name cannot empty");
    }else if (this.brandlist.brandname == "") {
      this.tost.warning("Brand Name cannot empty");
    }  else {

    if (this.mode == "Create") {
      this.brandserv.savebrandsList(this.brandlist).then(ret => {
        this.loaddata();
        if (ret) {
          this.tost.success("Successfully Created!");
          this.brandlist = new BrandList();
        }
      });
    } else {
      this.brandserv.updatebrandsList(this.brandlist).subscribe(ret => {
        this.loaddata();
        if (ret) {
          this.tost.success("Successfully Updated!");
          this.brandlist = new BrandList();
        }
      });
    }
  }
  } 
}

export class  BrandList{
   id:number=0;
   brandname:string="";
   productname:string="";
   categoryname:string="";
  constructor(){
    this.id=0;
    this.brandname="";
    this.productname="";
    this.categoryname="";

  }

}
