import {Component, OnInit} from '@angular/core';
import {Category} from "../../../model/category";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {LandTitleService} from "../../../service/land-title.service";
import {CategoryService} from "../../../service/category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  categoryList: Category[] = [];

  createForm = new FormGroup({
    id: new FormControl(),
    category: new FormControl('', [Validators.required]),
    local: new FormControl('',),
    level: new FormControl('',),
    titleType: new FormControl('',),
    status: new FormControl('', ),
    address: new FormControl('',),
    area: new FormControl('', [Validators.required, Validators.pattern("^(([0]*[1-9][0-9]*)|[1-9][0-9]*)$"), this.ValidationArea]),
    direction: new FormControl('',),
    title: new FormControl('',),
    content: new FormControl('',),
    price: new FormControl('', [Validators.required, Validators.pattern("^(([0]*[1-9][0-9]*)|[1-9][0-9]*)$"),this.ValidationPrice]),
    priceCheck: new FormControl('',),
    imageUrl: new FormControl('',),
    datePost: new FormControl('',)
  })

  constructor(private landTitleService: LandTitleService,
              private categoryService: CategoryService,
              private router: Router) {
    categoryService.getAllCategory().subscribe(data => {
      this.categoryList = data;
    })
  }

  ValidationArea(point: AbstractControl) {
    let value = +point.value;
    if (value < 20) {
      return {'notunder20': true};
    } else {
      return null;
    }
  }

  ValidationPrice(point: AbstractControl){
    let value=+point.value;
    if(value<=100000000){
      return {'notunder100mil':true};
    }else{
      return null;
    }
  }


  ngOnInit(): void {
  }

}
