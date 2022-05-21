import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListCustomerComponent} from "../list-customer/list-customer.component";
import {EditCustomerComponent} from "../edit-customer/edit-customer.component";
import {CreateCustomerComponent} from "../create-customer/create-customer.component";



@NgModule({
  declarations: [
    ListCustomerComponent,
    EditCustomerComponent,
    CreateCustomerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomerModule { }
