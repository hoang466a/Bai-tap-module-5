
import {ICustomerType} from "../customerType/ICustomerType";

export interface ICustomer {
  id: number;
  customerName: string;
  customerCode: string;
  customerBirthday: Date;
  customerGender: string;
  customerIdCard: string;
  customerPhone: string;
  customerEmail: string;
  customerAddress: string;
  customerType: ICustomerType;
}
