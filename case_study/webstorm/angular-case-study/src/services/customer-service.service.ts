import {Injectable} from '@angular/core';

import {CustomerTypeService} from './customer-type.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICustomer} from '../models/customer/ICustomer';


// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  URL_LIST = 'http://localhost:8080/customer/';

  genderList=["Male", "Female","Gay","Lesbian","Other"];

  constructor(private http: HttpClient) {
  }

  getAllGender(){
    return this.genderList;
  }

  // @ts-ignore
  getAllCustomer(): Observable<Customer[]> {
    return this.http.get<ICustomer[]>(this.URL_LIST);
  }


  saveCustomer(customer:ICustomer): Observable<ICustomer> {
    return this.http.post<ICustomer>(this.URL_LIST, customer);
  }

  findById(id: number): Observable<ICustomer> {
    // @ts-ignore
    return this.http.get<Customer>(this.URL_LIST+'/'+id);
  }

  updateCustomer(id: number, customer: ICustomer): Observable<ICustomer> {
  return this.http.put<ICustomer>(this.URL_LIST+'/'+id,customer);
  }

  deleteCustomer(id:number): Observable<ICustomer>{
      return this.http.delete<ICustomer>(this.URL_LIST+'/'+id);
  }

  find(customerName: string){
    return this.http.get<any>(this.URL_LIST+'?customerName_like='+customerName);
  }
}
