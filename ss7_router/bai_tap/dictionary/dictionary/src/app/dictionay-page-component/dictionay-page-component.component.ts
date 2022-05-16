import { Component, OnInit } from '@angular/core';
import {Dictionary} from "../model/dictionary";
import {DictionaryService} from "../service/dictionary.service";

@Component({
  selector: 'app-dictionay-page-component',
  templateUrl: './dictionay-page-component.component.html',
  styleUrls: ['./dictionay-page-component.component.css']
})
export class DictionayPageComponentComponent implements OnInit {
  dictionaryLis:Dictionary[]=[];
  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.dictionaryLis=this.dictionaryService.getAll();
  }

}
