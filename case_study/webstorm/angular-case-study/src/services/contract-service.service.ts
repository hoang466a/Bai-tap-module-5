import { Injectable } from '@angular/core';
import {Contract} from '../models/contract/Contract';
import {CustomerServiceService} from "./customer-service.service";
import {FacilityServiceService} from "./facility-service.service";

import {Facility} from "../models/service_furama/Facility";

@Injectable({
  providedIn: 'root'
})
export class ContractServiceService {
  customerService: CustomerServiceService;
  facilityService: FacilityServiceService;

  constructor() { }
}
