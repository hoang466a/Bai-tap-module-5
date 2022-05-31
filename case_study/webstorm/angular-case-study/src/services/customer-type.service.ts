import { Injectable } from '@angular/core';

import {Observable} from 'rxjs';

import {HttpClient} from '@angular/common/http';
import {ICustomerType} from '../models/customerType/ICustomerType';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  URL_TYPE = 'http://localhost:8080/customerType/';

  getAllCustomerType(): Observable<ICustomerType[]> {
    return this.http.get<ICustomerType[]>(this.URL_TYPE);
  }

  constructor(private http:HttpClient) {
  }

}

