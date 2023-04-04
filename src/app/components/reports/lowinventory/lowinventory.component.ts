import { Component } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-lowinventory',
  templateUrl: './lowinventory.component.html',
  styleUrls: ['./lowinventory.component.scss']
})
export class LowinventoryComponent {
  details: any;
  constructor(public invserv: InventoryService) {
    invserv.loadinventoryList().subscribe(ret => {
      this.details = ret; 

      this.details=this.details.filter((ret:any)=>{

        if(5>=ret.quantity){

          return ret;

        }

      });

    });
  }
}
