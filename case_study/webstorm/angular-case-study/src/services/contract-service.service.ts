import { Injectable } from '@angular/core';
import {Contract} from '../models/contract/Contract';

@Injectable({
  providedIn: 'root'
})
export class ContractServiceService {
  public contr(){
    let contractList: Contract[];

    contractList=[
      new Contract("1","22-01-2022","24-01-2022","500000","2500000"),
      new Contract('2', '23-01-2022', '25-01-2022', '500000', '2500000'),
      new Contract("3","24-01-2022","26-01-2022","500000","2500000"),
      new Contract("4","25-01-2022","27-01-2022","500000","2500000"),
      new Contract("5","26-01-2022","28-01-2022","500000","2500000"),
      new Contract("6","27-01-2022","29-01-2022","500000","2500000")
    ]
    return contractList;
  }
  constructor() { }
}
