import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Registration } from 'src/app/models/register';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  username: string = "";
  password = "";
  IsRegister = false;

  oRegDataset: any;
  constructor(private tost: ToastrService,private router: Router) {
    this.oRegDataset = new Registration();
  }
  btnRegister() {
    console.log('register');
    this.IsRegister = true;
  }
  btnLogin() {

    if (this.username == "") {
      console.log(this.username);
      this.tost.error("User Name can`t Empty");
    } else if (this.password == "") {
      this.tost.error("Password can`t Empty");
    } else {
      this.tost.success("Successfully Login!");

      this.router.navigate(['/dashboard'])
    }

  }
  onRegisterClick() {
    console.log('oRegDataset', this.oRegDataset);
    if (this.oRegDataset.FullName == "") {
      this.tost.error("User Name can`t Empty");
    } else if (this.oRegDataset.Dob=="" || this.oRegDataset.Dob > "2003-03-15") {
      this.tost.error("only allow above 18 years customers");
    } else if (  this.oRegDataset.LoanBalance>15000) {
      this.tost.error("Maximum Loan amount is 15000 lkr");
    }else if (this.oRegDataset.LoanBalance != 0 && this.oRegDataset.Installment == 0) {
      this.tost.error("Installments can`t Empty");
    } else if (this.oRegDataset.Installment > 3) {
      this.tost.error("Maximum installment count is 3");
    } else if (this.oRegDataset.username == "") {
      this.tost.error("User Name can`t Empty");
    } else if (this.oRegDataset.password == "") {
      this.tost.error("User Name can`t Empty");
    } else {
      this.tost.success("Successfully Registered!");
    }
  }



}
