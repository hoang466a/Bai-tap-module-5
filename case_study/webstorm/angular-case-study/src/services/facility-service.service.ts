import { Injectable } from '@angular/core';
import {Facility} from '../models/service_furama/Facility';
import {RentTypeService} from "./rent-type.service";
import {RentType} from "../models/service_furama/RentType";
import {ServiceTypeService} from "./service-type.service";
import {ServiceType} from "../models/service_furama/ServiceType";

@Injectable({
  providedIn: 'root'
})
export class FacilityServiceService {
  rentTypeService: RentTypeService;
  serviceTypeService: ServiceTypeService;

  public faciList(){
    let facilityList: Facility[];
    let rentTypeList: RentType[];
    let serviceTypeList: ServiceType[];
    rentTypeList=this.rentTypeService.renTypeList();
    serviceTypeList=this.serviceTypeService.serviTypeList();
    facilityList = [
      new Facility('Room1', '34', '45', '5',
        rentTypeList[0], null, null, null, null, serviceTypeList[0]),
      new Facility('Room2', '46', '45', '5',
        rentTypeList[1], null, null, null, null, serviceTypeList[0]),
      new Facility('Room3', '50', '32', '3',
        rentTypeList[2], null, null, null, null, serviceTypeList[0]),
      new Facility('Room4', '57', '34', '3',
        rentTypeList[1], null, null, null, null, serviceTypeList[0]),
      new Facility('Room5', '47', '24', '3',
        rentTypeList[0], null, null, null, null, serviceTypeList[0])];
    return facilityList;
  }
  constructor() { }
}
