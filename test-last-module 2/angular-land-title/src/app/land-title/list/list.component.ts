import { Component, OnInit } from '@angular/core';
import {LandTitle} from "../../../model/land-title";
import {CategoryService} from "../../../service/category.service";
import {LandTitleService} from "../../../service/land-title.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  landTitleList: LandTitle[];
  localList: string[];
  constructor(private categoryService:CategoryService,
              private landTitleService:LandTitleService,
              private router:Router) {
    this.localList=landTitleService.getAllLocal();
  }

  ngOnInit(): void {
    // @ts-ignore
    this.landTitleService.getAllLandTitle().subscribe((data:any) =>
    {this.landTitleList=data.content;
      }
    )}

}
