import {Customer} from "../customer/Customer";
import {Facility} from "../service_furama/Facility";

export interface IContract {
  contractId: number;
  customer: Customer;
  facility: Facility;
  contractStartDate: String;
  contractEndDate: String;
  contractDeposit: string;
}
