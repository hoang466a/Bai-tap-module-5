import {IContract} from './IContract';
import {Customer} from "../customer/Customer";
import {Facility} from "../service_furama/Facility";

export class Contract implements IContract{
  constructor(
    public contractId: number,
    public contractStartDate: String,
    public contractEndDate: String,
    public contractDeposit: string,
    public customer: Customer,
    public facility: Facility
  ) {

  }

}
