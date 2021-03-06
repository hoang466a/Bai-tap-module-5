import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerTypeService} from '../../../services/customer-type.service';
import {CustomerServiceService} from '../../../services/customer-service.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ICustomerType} from '../../../models/customerType/ICustomerType';
import {ICustomer} from '../../../models/customer/ICustomer';
import {DatePipe, formatDate} from '@angular/common';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customer: ICustomer;
  customerTypes: ICustomerType[];
  editFrom: FormGroup;
  genderList: string[];
  id: number;

  // editFrom = new FormGroup({
  //   id: new FormControl(),
  //   customerName: new FormControl('', [Validators.required]),
  //   customerCode: new FormControl('', [Validators.required, Validators.pattern('^KH-[0-9]{4}$')]),
  //   customerBirthday: new FormControl('', [Validators.required]),
  //   customerGender: new FormControl('', [Validators.required]),
  //   customerIdCard: new FormControl('', [Validators.required, Validators.pattern('[0-9]{9}')]),
  //   customerPhone: new FormControl('', [Validators.required, Validators.pattern('(84|0)+(9[0|1])+([0-9]{7})')]),
  //   customerEmail: new FormControl('', [Validators.required, Validators.email]),
  //   customerAddress: new FormControl('', [Validators.required]),
  //   customerType: new FormControl('', [Validators.required])
  // });


  constructor(private customerTypeService: CustomerTypeService,
              private customerServiceService: CustomerServiceService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private datepipe: DatePipe) {


    this.editFrom = new FormGroup({
      id: new FormControl(''),
      customerName: new FormControl('', [Validators.required]),
      customerCode: new FormControl('', [Validators.required, Validators.pattern('^KH-[0-9]{4}$')]),
      customerBirthday: new FormControl('', [Validators.required]),
      customerGender: new FormControl('', [Validators.required]),
      customerIdCard: new FormControl('', [Validators.required, Validators.pattern('[0-9]{9}')]),
      customerPhone: new FormControl('', [Validators.required, Validators.pattern('(84|0)+(9[0|1])+([0-9]{7})')]),
      customerEmail: new FormControl('', [Validators.required, Validators.email]),
      customerAddress: new FormControl('', [Validators.required]),
      customerType: new FormControl('', [Validators.required])
    });

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      console.log(this.id);
    });

    this.customerTypeService.getAllCustomerType().subscribe(data => {
      this.customerTypes = data;
      this.genderList=this.customerServiceService.genderList;
      console.log(this.customerTypes);
        this.customerServiceService.findById(this.id).subscribe((data1:any) => {
          this.customer = data1;
          // @ts-ignore
          this.customer.customerBirthday=formatDate(this.customer.customerBirthday,'yyyy-MM-dd','en_US');
          console.log(this.customer);
          this.editFrom.patchValue(this.customer);
          console.log(this.editFrom.value);
        });
    });

  }

  getCustomer() {

  }



  compareFn(t1: ICustomerType, t2: ICustomerType):boolean {
    return t1 && t2 ? t1.customerTypeId === t2.customerTypeId : t1 === t2;
  }


  updateCustomer(id: number) {

    const customer = this.editFrom.value;
    if (this.editFrom.invalid) {
      console.log(this.editFrom);
      alert('form c?? l???i!');
    } else {
      this.customerServiceService.updateCustomer(id, customer).subscribe(() => {
        this.router.navigate(['/customer/list']);
        alert('C???p nh???t th??nh c??ng');
      }, e => {
        console.log(e);
      });
    }}

}
