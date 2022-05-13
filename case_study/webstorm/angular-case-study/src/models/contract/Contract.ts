import {IContract} from './IContract';

export class Contract implements IContract{
  constructor(
    public contractId: string,
    public contractStartDate: string,
    public contractEndDate: string,
    public contractDeposit: string,
    public contractTotalMoney: string
  ) {

  }

}
