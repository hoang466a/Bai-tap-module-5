
import {ICustomerType} from "../customerType/ICustomerType";

export interface ICustomer {
  id: number;
  customerName: string;
  customerCode: string;
  customerBirthday: Date;
  customerGender: boolean;
  customerIdCard: string;
  customerPhone: string;
  customerEmail: string;
  customerAddress: string;
  customerType: ICustomerType;
}
