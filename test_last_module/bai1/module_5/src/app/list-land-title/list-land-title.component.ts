import { Component, OnInit } from '@angular/core';
import {LandTitle} from "../../models/landTitle/land-title";
import {LandTitleService} from "../../services/land-title.service";
import {CategoryService} from "../../services/category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-land-title',
  templateUrl: './list-land-title.component.html',
  styleUrls: ['./list-land-title.component.css']
})
export class ListLandTitleComponent implements OnInit {
  landTitleList: LandTitle[];
  p: number = 1;
  constructor(private landTitleService:LandTitleService,
              private categoryService:CategoryService,
              private router:Router) { }

  // @ts-ignore
  collection: any[] =this.landTitleList;

  ngOnInit(): void {
this.landTitleService.getAllLandTitle().subscribe()((data: LandTitle[]) =>{
  this.landTitleList=data;
});
  }

  search(value: string) {

  }
}
