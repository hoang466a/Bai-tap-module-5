import {RentType} from "./RentType";
import {ServiceType} from "./ServiceType";


export interface IFacility {
  serviceName: string;
  serviceArea: string;
  serviceCost: string;
  serviceMaxPeople: string;
  rentType: RentType;
  standardRoom: string;
  descriptionOtherConvenience: string;
  poolArea: string;
  numberOfFloor: string;
  serviceType: ServiceType;
}
