import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  details:any=[
    {prodid:"1",proddescr:"Apple"},
    {prodid:"2",proddescr:"Samsung"}
  ];
  mode:string="Create";
  prodlist=new ProductList();
  pointmargin:string="";
  onEdit(rt1:number, rt2:any){

    if(rt1==1){
      this.prodlist=rt2;
      this.mode="Update";
    }

  }
  onClearclick(){
    this.prodlist=new ProductList();
    this.mode="Create"
  }
  onCreateorUpdateclick(){
    
  }
}

export class ProductList{
  prodid:number=0;
  proddescr:string="";
  constructor(){
    this.prodid=0;
    this.proddescr="";

  }

}
