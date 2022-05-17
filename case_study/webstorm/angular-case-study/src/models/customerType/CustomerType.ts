import {ICustomerType} from "./ICustomerType";

export class CustomerType implements ICustomerType{
  constructor(
    public idCustomerType: number,
    public nameCustomerType: string
  ) {
  }


}
