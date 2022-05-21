import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateContractComponent} from "../create-contract/create-contract.component";
import {ListContractComponent} from "../list-contract/list-contract.component";



@NgModule({
  declarations: [CreateContractComponent,
    ListContractComponent],
  imports: [
    CommonModule
  ]
})
export class ContractModuleModule { }
