import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  details: any = [
    { prodid: "1", proddescr: "Apple" },
    { prodid: "2", proddescr: "Samsung" }
  ];
  mode: string = "Create";
  prodlist = new ProductList();
  pointmargin: string = "";

  constructor(public prod: ProductService, private tost: ToastrService) {
    this.loaddata();
  }

  loaddata() {
    this.prod.loadproductList().subscribe(ret => {
      this.details = ret;

    });
  }

  onEdit(rt1: number, rt2: any) {

    if (rt1 == 1) {
      this.prodlist = rt2;
      this.mode = "Update"; 
    } else {
      this.prodlist = rt2;
    }

  }
  ondelete(){
    console.log(this.prodlist)
      this.prod.deleteproductList(this.prodlist.id).then(ret => {
        this.loaddata();
        
          this.tost.success("Successfully Deleted!");
          this.prodlist = new ProductList();
       
      });
  }
  onClearclick() {
    this.prodlist = new ProductList();
    this.mode = "Create"
  }
  onCreateorUpdateclick() {


    if(this.prodlist.productname.length>0){
       if (this.mode == "Create") {
      this.prod.saveproductList(this.prodlist).then(ret => {
        this.loaddata();
        if (ret) {
          this.tost.success("Successfully Created!");
          this.prodlist = new ProductList();
        }
      });
    } else {
      this.prod.updateproductList(this.prodlist).subscribe(ret => {
        this.loaddata();
        if (ret) {
          this.tost.success("Successfully Updated!");
          this.prodlist = new ProductList();
        }
      });
    }
    }else{
      this.tost.warning("Product name cannot empty");
    }

   

  }
}

export class ProductList {
  id: number = 0;
  productname: string = "";
  constructor() {
    this.id = 0;
    this.productname = "";

  }

}
