import { Component, OnInit } from '@angular/core';

import {CustomerServiceService} from '../../../services/customer-service.service';
import {ICustomer} from '../../../models/customer/ICustomer';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customerList: ICustomer[];
  p: number = 1;
  constructor(private customerService: CustomerServiceService) {

  }

  collection: any[] = this.customerList;

  ngOnInit(): void {
    this.customerService.getAllCustomer().subscribe(data =>{
      this.customerList=data;
      console.log(this.customerList);
    });
  }

}
