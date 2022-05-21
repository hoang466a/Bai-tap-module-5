import { Component, OnInit } from '@angular/core';
import {ServiceType} from "../../../models/service_furama/ServiceType";
import {RentType} from "../../../models/service_furama/RentType";
import {ServiceTypeService} from "../../../services/service-type.service";
import {RentTypeService} from "../../../services/rent-type.service";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-service-villa',
  templateUrl: './edit-service-villa.component.html',
  styleUrls: ['./edit-service-villa.component.css']
})
export class EditServiceVillaComponent implements OnInit {
  ngOnInit(): void {
  }
 /* serviceTypeList: ServiceType[];
  rentTypeServiceList: RentType[];
  constructor(private serviceTypeService:ServiceTypeService,
              private rentTypeService: RentTypeService) {
    this.serviceTypeList=serviceTypeService.serviTypeList();
    this.rentTypeServiceList=rentTypeService.renTypeList();
  }

  createForm = new FormGroup({
    serviceName: new FormControl('',[Validators.required,Validators.pattern((/^[A-Za-z]+$/))]),
    serviceArea: new FormControl('',[Validators.required,Validators.pattern("^(-?)[0-9]*$"),this.ValidationCustomPoint]),
    serviceCost: new FormControl('',[Validators.required]),
    serviceMaxPeople: new FormControl('', [Validators.required]),
    rentType: new FormControl('',[Validators.required]),
    standardRoom: new FormControl('',[Validators.required]),
    descriptionOtherConvenience: new FormControl('',[Validators.required]),
    poolArea: new FormControl('',[Validators.required,Validators.pattern("^(-?)[0-9]*$"),this.ValidationCustomPoint]),
    numberOfFloor: new FormControl('',[Validators.required,Validators.pattern("^(-?)[0-9]*$"),this.ValidationCustomPoint]),
    serviceType: new FormControl('',[Validators.required])
  })





  ngOnInit(): void {
  }

  ValidationCustomPoint(point: AbstractControl){
    let value=point.value;
    if(value<0){
      return {'notunder0':true};
    } else {
      return null;
    }

  }

  createVilla() {

  }*/
}
