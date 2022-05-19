
import {Facility} from "../service_furama/Facility";
import {ICustomer} from '../customer/ICustomer';

export interface IContract {
  contractId: number;
  customer: ICustomer;
  facility: Facility;
  contractStartDate: String;
  contractEndDate: String;
  contractDeposit: string;
}
