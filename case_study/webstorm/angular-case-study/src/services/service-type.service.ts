import { Injectable } from '@angular/core';
import {RentType} from "../models/service_furama/RentType";
import {ServiceType} from "../models/service_furama/ServiceType";

@Injectable({
  providedIn: 'root'
})
export class ServiceTypeService {
  serviTypeList(){
    let serviceTypeList: ServiceType[];
    // @ts-ignore
    serviceTypeList=[
      new ServiceType('karaoke','2',"1200"),
      new ServiceType("cheo thuyen",'3',"1200"),
      new ServiceType("nhay du","3","2100"),
    ]
    return serviceTypeList;
  }

  constructor() { }
}
