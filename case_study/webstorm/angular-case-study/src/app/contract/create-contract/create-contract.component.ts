import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {from} from 'rxjs';

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {
  // @ts-ignore
  createForm = new FormGroup({
    id: new FormControl(),
    contractStartDate: new FormControl('2020-02-01',[Validators.required,this.ValidationDatebefore]),
    contractEndDate: new FormControl('2020-01-01',[Validators.required]),

  })

  ValidationDatebefore(formGroup: AbstractControl):ValidationErrors|null{
      const fromDate = formGroup.get('contractStartDate');
      const toDate = formGroup.get('contractEndDate');
      if(fromDate==null || toDate ==null){
        return null;
        console.log(fromDate);
        console.log(toDate);
      }
      else{
      return new Date(fromDate.value)>new Date (toDate.value)? {'date1':true}:null;}
  }

  /*validateEndDateBefore() {
    let date1 = new Date(this.medicalRecordForm.get('startDate').value);
    let date2 = new Date(this.medicalRecordForm.get('endDate').value);
    if (date1?.getTime() >= date2?.getTime()) {
      this.medicalRecordForm.get('endDate').setErrors({endDateBefore: true});
    }
  }*/

  constructor() {

  }

  ngOnInit(): void {
  }

}
