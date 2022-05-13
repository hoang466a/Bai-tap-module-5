import { Component, OnInit } from '@angular/core';
import {Facility} from '../../../models/service_furama/Facility';
import {FacilityServiceService} from '../../../services/facility-service.service';



@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {
  facilityList: Facility[];

  constructor(private facilityService: FacilityServiceService) {this.facilityList = facilityService.faciList(); }

  ngOnInit(): void {
  }

}
