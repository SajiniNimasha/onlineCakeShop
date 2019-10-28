import { Component, OnInit, ViewChild, ElementRef, ViewChildren } from '@angular/core';
import { CustomerDto } from 'src/app/dto/CustomerDto';
import {NgForm} from '@angular/forms';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  customers: CustomerDto[] = [];
  selectedCustomer: CustomerDto = new CustomerDto('', '', '');

  @ViewChildren('frmCustomer') frmCustomer: NgForm;

@ViewChildren('txtId') txtId:ElementRef;


  constructor(private customerService:CustomerService) { }

  ngOnInit() {
  }


  saveCustomer(): void {
    if (!this.frmCustomer.invalid) {

      this.customerService.saveCustomer(this.selectedCustomer)
        .subscribe(resp => {
          if (resp) {
            alert('Customer has been saved successfully');
            this.customers.push(this.selectedCustomer);
          } else {
            alert('Failed to save the customer');
          }
        });

    } else {
      alert('Invalid Data, Please Correct...!');
    }
  }

}
