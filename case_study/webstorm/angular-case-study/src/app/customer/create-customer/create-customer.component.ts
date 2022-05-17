import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../../../models/customerType/CustomerType";
import {CustomerTypeService} from "../../../services/customer-type.service";
import {CustomerServiceService} from "../../../services/customer-service.service";
import {Customer} from "../../../models/customer/Customer";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customers:Customer[]=[];
  customerTypes:CustomerType[]=[];

createFrom = new FormGroup({
  customerName: new FormControl('',[Validators.required]),
  customerCode: new FormControl('',[Validators.required,Validators.pattern("^KH-[0-9]{4}$")]),
  customerBirthday: new FormControl('',[Validators.required]),
  customerGender: new FormControl('', [Validators.required]),
  customerIdCard: new FormControl('',[Validators.required,Validators.pattern("[0-9]{9}")]),
  customerPhone: new FormControl('',[Validators.required,Validators.pattern("(84|0)+(9[0|1])+([0-9]{7})")]),
  customerEmail: new FormControl('',[Validators.required,Validators.email]),
  customerAddress: new FormControl('',[Validators.required]),
  customerType: new FormControl('',[Validators.required])
})

  constructor(private customerTypeService: CustomerTypeService,
              private customerServiceService:CustomerServiceService) {
  this.customerTypes= this.customerTypeService.customerTyList()
  }

  ngOnInit(): void {
  }

  createCustomer() {

  }
}
