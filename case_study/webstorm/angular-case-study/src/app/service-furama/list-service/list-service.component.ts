import { Component, OnInit } from '@angular/core';
import {IFacility} from "../../class/interface/facility";
import {IAccompaniedService} from "../../class/interface/accompanied-service";

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {
  facilityList:IFacility[];
  accompaniedServiceList : IAccompaniedService[];
  let accSer= IAccompaniedService;
  constructor() { }

  ngOnInit(): void {
  }

}
