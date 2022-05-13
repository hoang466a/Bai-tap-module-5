import { Component, OnInit } from '@angular/core';
import {Contract} from '../../../models/contract/Contract';
import {ContractServiceService} from '../../../services/contract-service.service';

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {
  contractList: Contract[];

  constructor(private contractServiceService:ContractServiceService) {this.contractList= contractServiceService.contr() }

  ngOnInit(): void {
  }

}
