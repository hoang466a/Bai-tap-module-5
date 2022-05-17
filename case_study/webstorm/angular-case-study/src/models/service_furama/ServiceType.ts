import {IServiceType} from "./IServiceType";

export class ServiceType implements IServiceType{
  constructor(
   public serviceTypeName:string,
   public serviceTypeValue:string,
   public serviceTypeCost:string
  ) {
  }
}
