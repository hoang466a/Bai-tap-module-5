import { Injectable } from '@angular/core';
import {Contract} from '../models/contract/Contract';
import {CustomerServiceService} from "./customer-service.service";
import {FacilityServiceService} from "./facility-service.service";
import {Customer} from "../models/customer/Customer";
import {Facility} from "../models/service_furama/Facility";

@Injectable({
  providedIn: 'root'
})
export class ContractServiceService {
  customerService: CustomerServiceService;
  facilityService: FacilityServiceService;
  public contr(){
    let contractList: Contract[];
    let customerList: Customer[];
    let facilityList: Facility[];
    customerList=this.customerService.cusList();
    facilityList=this.facilityService.faciList();
    contractList=[
      new Contract(1,'2022-01-01','2022-01-23',"500000",customerList[2],facilityList[1]),
      new Contract(2, '2022-01-01','2022-01-23', '500000',customerList[0],facilityList[1]),
      new Contract(3,'2022-01-01','2022-01-23',"500000",customerList[1],facilityList[2]),
      new Contract(4,'2022-01-01','2022-01-23',"500000",customerList[0],facilityList[1]),
      new Contract(5,'2022-01-01','2022-01-23',"500000",customerList[1],facilityList[1]),
      new Contract(6,'2022-01-01','2022-01-23',"500000",customerList[0],facilityList[1]),
      new Contract(7,'2022-01-01','2022-01-23',"510000",customerList[1],facilityList[1])
    ]
    return contractList;
  }
  constructor() { }
}
