import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

import {CustomerTypeService} from "../../../services/customer-type.service";
import {CustomerServiceService} from "../../../services/customer-service.service";

import {Observable} from "rxjs";
import {Router} from '@angular/router';
import {ICustomerType} from '../../../models/customerType/ICustomerType';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerTypes:ICustomerType[]=[];
  genderList:string[];
createForm = new FormGroup({
  id: new FormControl(),
  customerName: new FormControl('',[Validators.required]),
  customerCode: new FormControl('',[Validators.required,Validators.pattern("^KH-[0-9]{4}$")]),
  customerBirthday: new FormControl('',[Validators.required]),
  customerGender: new FormControl('', Validators.required),
  customerIdCard: new FormControl('',[Validators.required,Validators.pattern("[0-9]{9}"),this.ValiddationUnder0]),
  customerPhone: new FormControl('',[Validators.required,Validators.pattern("(84|0)+(9[0|1])+([0-9]{7})")]),
  customerEmail: new FormControl('',[Validators.required,Validators.email]),
  customerAddress: new FormControl('',[Validators.required]),
  customerType: new FormControl('',[Validators.required])
})

  today:Date=new Date();

  constructor(private customerTypeService: CustomerTypeService,
              private customerServiceService:CustomerServiceService,
              private router:Router) {
  this.genderList=customerServiceService.genderList;
  }

  ValiddationUnder0(point: AbstractControl){
  let value=point.value;
  if(+value<0){
    return{'notunder0':true};
  }else{
    return null;
  }
  }

  ValidationDatebefore(fromDateField: string, toDateField: string){
    return (formGroup:AbstractControl)=>{
      const fromDate = formGroup.get(fromDateField).value;
      const toDate = formGroup.get(fromDateField).value;
      if((fromDate !== null && toDate !== null)&& fromDate >toDate){
        return {'date1':true};
      }
      return null;
    }
  }

  ngOnInit(): void {
    this.customerTypeService.getAllCustomerType().subscribe(data =>{
      this.customerTypes=data});
  }


  createCustomer() {
    if(this.createForm.get('customerGender').value=="Female"){
      this.createForm.get('customerGender').setValue(true);}
    else{
      this.createForm.get('customerGender').setValue(false);}

    const customer = this.createForm.value;
    if(this.createForm.invalid){
      alert("form có lỗi!");
    }else{
      this.customerServiceService.saveCustomer(customer).subscribe(data => {
        this.createForm.reset();
        alert('Tạo thành công');
        this.router.navigate(['/customer/list']);
      }, e => {
        console.log(e);
      });}
  }
}
