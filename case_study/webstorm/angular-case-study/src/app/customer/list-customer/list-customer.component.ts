import { Component, OnInit } from '@angular/core';

import {CustomerServiceService} from '../../../services/customer-service.service';
import {ICustomer} from '../../../models/customer/ICustomer';
import {CustomerTypeService} from '../../../services/customer-type.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customerList: ICustomer[];
  idCustomer: number;
  nameCustomer: string;
  p: number = 1;
  constructor(private customerService: CustomerServiceService,
              private customerTypeService: CustomerTypeService,
              private router:Router) {
  }
  collection: any[] = this.customerList;

  ngOnInit(): void {
    this.customerService.getAllCustomer().subscribe(data =>{
      this.customerList=data;
      //console.log(this.customerList);
    });
  }

  delete(closeModal: HTMLButtonElement) {
    this.customerService.deleteCustomer(this.idCustomer).subscribe(() => {
      closeModal.click();
      this.ngOnInit();
    }, e => {
      console.log(e);
    });
  }



  sendCustomer(id: number,name: string) {
      this.idCustomer=id;
      this.nameCustomer=name;
  }

  search(customer: string) {
      this.customerService.find(customer).subscribe((data)=>{
        this.customerList=data;
    console.log(this.customerList)})
  }
}
