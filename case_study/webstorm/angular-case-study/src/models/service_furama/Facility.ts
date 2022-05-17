import {IFacility} from "./IFacility";
import {RentType} from "./RentType";
import {ServiceType} from "./ServiceType";


export class Facility implements IFacility{
  constructor(
  public serviceName: string,
  public serviceArea: string,
  public serviceCost: string,
  public serviceMaxPeople: string,
  public rentType: RentType,
  public standardRoom: string,
  public descriptionOtherConvenience: string,
  public poolArea: string,
  public numberOfFloor: string,
  public serviceType: ServiceType
  ) {
  }


}
