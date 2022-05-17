import { Injectable } from '@angular/core';
import {Customer} from '../models/customer/Customer';
import {CustomerType} from "../models/customerType/CustomerType";
import {CustomerTypeService} from "./customer-type.service";


// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  customerTypeService: CustomerTypeService;
  public cusList() {
    let customerList: Customer[];
    let customerType: CustomerType[];
    customerType=this.customerTypeService.customerTyList();
    customerList = [
      new Customer(1, 'Nguyễn Văn A', 'KH-001', '12-02-1993', true, '123456789', '0912457842', 'hoangtn92@gmail.com', '49 Hà Huy Tập', customerType[0]),
      new Customer(2, 'Nguyễn Văn B', 'KH-002', '13-02-1994', true, '123456789', '0912457842', 'hoangtn92@gmail.com', '49 Hà Huy Tập', customerType[1]),
      new Customer(3, 'Nguyễn Văn C', 'KH-002', '13-02-1995', true, '123456789', '0912457842', 'hoangtn92@gmail.com', '49 Hà Huy Tập', customerType[2]),
      new Customer(4, 'Nguyễn Văn D', 'KH-002', '13-02-1991', true, '123456789', '0912457842', 'hoangtn92@gmail.com', '49 Hà Huy Tập', customerType[1]),
      new Customer(5, 'Nguyễn Văn E', 'KH-002', '13-02-1998', true, '123456789', '0912457842', 'hoangtn92@gmail.com', '49 Hà Huy Tập', customerType[2]),
      new Customer(6, 'Nguyễn Văn F', 'KH-002', '13-02-1992', true, '123456789', '0912457842', 'hoangtn92@gmail.com', '49 Hà Huy Tập', customerType[3]),
      new Customer(7, 'Nguyễn Văn G', 'KH-002', '13-02-1994', true, '123456789', '0912457842', 'hoangtn92@gmail.com', '49 Hà Huy Tập', customerType[1]),
      new Customer(8, 'Nguyễn Văn H', 'KH-002', '13-02-1991', true, '123456789', '0912457842', 'hoangtn92@gmail.com', '49 Hà Huy Tập', customerType[0])];
    return customerList;
  }



  constructor() { }
}
