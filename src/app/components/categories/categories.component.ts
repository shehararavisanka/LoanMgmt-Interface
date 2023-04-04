import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  details: any = [
    { Cateid: "1", Catedescr: "Airpod", ProdId: "1", ProdDesc: "Apple" },
    { Cateid: "2", Catedescr: "Phone", ProdId: "1", ProdDesc: "Apple" },
    { Cateid: "3", Catedescr: "Watch", ProdId: "1", ProdDesc: "Apple" }
  ];
  mode: string = "Create";
  Catelist = new CateuctList();
  pointmargin: string = "";

  ProdDetails: any = [
    { ProdId: "1", proddescr: "Apple" },
    { ProdId: "2", proddescr: "Samsung" }
  ];


  constructor(public catserv: CategoriesService, private tost: ToastrService, public prod: ProductService) {
    this.loaddata();
    this.loadproduct();
  }

  loaddata() {
    this.catserv.loadcategoryList().subscribe(ret => {
      this.details = ret;
    });
  }
  loadproduct() {
    this.prod.loadproductList().subscribe((ret) => {
      console.log(ret);
      this.ProdDetails = ret;

    });
  }



  onEdit(rt1: number, rt2: any) {

    if (rt1 == 1) {
      console.log('rt2', rt2);
      this.Catelist = rt2;
      this.mode = "Update";
    } else {

      this.Catelist = rt2;
    }

  }

  ondelete() {
    this.catserv.deletecategoryList(this.Catelist.id).then(ret => {
      this.loaddata();
     
        this.tost.success("Successfully Deleted!");
        this.Catelist = new CateuctList();
      
    });
  }
  onClearclick() {
    this.Catelist = new CateuctList();
    this.mode = "Create"
  }
  onCreateorUpdateclick() {

    if (this.Catelist.categoryname == "") {
      this.tost.warning("Category Name cannot empty");
    } else if (this.Catelist.productname == "") {
      this.tost.warning("product Name cannot empty");
    } else {
      if (this.mode == "Create") {
        this.catserv.savecategoryList(this.Catelist).then(ret => {
          this.loaddata();
          if (ret) {
            this.tost.success("Successfully Created!");
            this.Catelist = new CateuctList();
          }
        });
      } else {
        this.catserv.updatecategoryList(this.Catelist).subscribe(ret => {
          this.loaddata();
          if (ret) {
            this.tost.success("Successfully Updated!");
            this.Catelist = new CateuctList();
          }
        });
      }
    }
  }


}

export class CateuctList {
  id: number = 0;
  categoryname: string = "";
  ProdId = 0;
  productname: string = "";
  constructor() {
    this.id = 0;
    this.categoryname = "";
    this.ProdId = 0;
    this.productname = "";

  }

}
