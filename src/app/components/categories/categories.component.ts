import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  details:any=[
    { Cateid:"1", Catedescr:"Airpod",ProdId:"1",ProdDesc:"Apple"},
    { Cateid:"2", Catedescr:"Phone",ProdId:"1",ProdDesc:"Apple"},
    { Cateid:"3", Catedescr:"Watch",ProdId:"1",ProdDesc:"Apple"}
  ];
  mode:string="Create";
   Catelist=new  CateuctList();
  pointmargin:string="";

  ProdDetails:any=[
    {ProdId:"1",proddescr:"Apple"},
    {ProdId:"2",proddescr:"Samsung"}
  ];
  onEdit(rt1:number, rt2:any){

    if(rt1==1){
      console.log('rt2',rt2);
      this.Catelist=rt2;
      this.mode="Update";
    }

  }
  onClearclick(){
    this.Catelist=new  CateuctList();
    this.mode="Create"
  }
  onCreateorUpdateclick(){
    
  }
  loaddata(){

  }
}

export class  CateuctList{
   Cateid:number=0;
   Catedescr:string="";
   ProdId=0;
   ProdDesc:string="";
  constructor(){
    this.Cateid=0;
    this.Catedescr="";
    this.ProdId=0;
    this.ProdDesc="";

  }

}
