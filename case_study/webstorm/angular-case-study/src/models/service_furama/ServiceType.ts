import {IServiceType} from "./IServiceType";

export class ServiceType implements IServiceType{
  constructor(
   public serviceTypeName:string,
   public serviceTypeValue:number,
   public serviceTypeCost:number
  ) {
  }
}
