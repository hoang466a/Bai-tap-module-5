import {Component, Input, OnInit} from '@angular/core';
import {Dictionary} from "../model/dictionary";
import {DictionaryService} from "../service/dictionary.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-dictionary-detail-component',
  templateUrl: './dictionary-detail-component.component.html',
  styleUrls: ['./dictionary-detail-component.component.css']
})
export class DictionaryDetailComponentComponent implements OnInit {
  // @ts-ignore
  dictionary: Dictionary;
  constructor(
    private dictionaryService: DictionaryService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap)=>{
      // @ts-ignore
      const word: string = paramMap.get('word');
      console.log(word);
      // @ts-ignore
      //this.dictionary =this.dictionaryService.findByWord(word);
    });
  }


}



