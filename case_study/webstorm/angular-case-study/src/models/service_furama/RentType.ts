import {IRentType} from "./IRentType";

export class RentType implements IRentType{
  constructor(
    public rentTypeId: number,
    public rentTypeName: string
  ) {
  }
}
