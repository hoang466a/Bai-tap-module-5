import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListCustomerComponent} from "../list-customer/list-customer.component";
import {EditCustomerComponent} from "../edit-customer/edit-customer.component";
import {CreateCustomerComponent} from "../create-customer/create-customer.component";
import {NgxPaginationModule} from "ngx-pagination";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ListCustomerComponent,
    EditCustomerComponent,
    CreateCustomerComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    ListCustomerComponent,
    EditCustomerComponent,
    CreateCustomerComponent
  ]
})
export class CustomerModule { }
