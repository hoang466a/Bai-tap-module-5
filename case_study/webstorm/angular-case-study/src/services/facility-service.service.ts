import { Injectable } from '@angular/core';
import {Facility} from '../models/service_furama/Facility';

@Injectable({
  providedIn: 'root'
})
export class FacilityServiceService {
  public faciList(){
    let facilityList: Facility[];

    facilityList = [
      new Facility('Room1', '34', '45', '5',
        'Year', null, null, null, null, 'Karaoke'),
      new Facility('Room2', '46', '45', '5',
        'Month', null, null, null, null, 'Bath'),
      new Facility('Room3', '50', '32', '3',
        'Day', null, null, null, null, 'Bath'),
      new Facility('Room4', '57', '34', '3',
        'Hour', null, null, null, null, 'Bath'),
      new Facility('Room5', '47', '24', '3',
        'Hour', null, null, null, null, 'Bath')];
    return facilityList;
  }
  constructor() { }
}
