import { Component, OnInit } from '@angular/core';
import {Customer} from '../../../models/customer/Customer';
import {CustomerServiceService} from '../../../services/customer-service.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customerList: Customer[];
  constructor(private customerService: CustomerServiceService) {this.customerList = customerService.cusList(); }

  ngOnInit(): void {
  }

}
