import {IContract} from './IContract';
import {Facility} from "../service_furama/Facility";
import {ICustomer} from '../customer/ICustomer';

export class Contract implements IContract{
  constructor(
    public contractId: number,
    public contractStartDate: String,
    public contractEndDate: String,
    public contractDeposit: string,
    public customer: ICustomer,
    public facility: Facility
  ) {

  }

}
