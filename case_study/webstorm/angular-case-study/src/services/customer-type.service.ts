import { Injectable } from '@angular/core';
import {CustomerType} from "../models/customerType/CustomerType";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  public customerTyList(){
    let customerTypeList: CustomerType[];
    customerTypeList=[
      new CustomerType(1,'Diamond'),
      new CustomerType(2,'Platinum'),
      new CustomerType(3,'Gold'),
      new CustomerType(4,'Silver'),
      new CustomerType(5,'Member'),
    ]
    return customerTypeList;
  }}

