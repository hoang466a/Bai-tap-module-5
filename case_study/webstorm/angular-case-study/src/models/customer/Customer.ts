import {ICustomer} from "./ICustomer";

export class Customer implements ICustomer{
  constructor(
  public customerId: number,
  public customerName: string,
  public customerCode: string,
  public customerBirthday: string,
  public customerGender: boolean,
  public customerIdCard: string,
  public customerPhone: string,
  public customerEmail: string,
  public customerAddress: string,
  public customerType: string,
  ) {
  }
}
