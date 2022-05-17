import { Injectable } from '@angular/core';
import {RentType} from "../models/service_furama/RentType";

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {
  renTypeList(){
    let rentTypeList: RentType[];
    rentTypeList=[
      new RentType(1,'năm'),
      new RentType(2,'tháng'),
      new RentType(3,"ngày"),
      new RentType(4,'giờ')
    ]
    return rentTypeList;
  }
  constructor() { }
}
