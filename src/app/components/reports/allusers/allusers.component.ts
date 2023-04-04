import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.scss']
})
export class AllusersComponent {
  details: any;
  constructor(public serv: LoginService) {
    serv.getallusers().subscribe(ret => {
      this.details = ret;
    });
  }
}
