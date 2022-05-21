import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {Category} from "../../product/category";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.categoryService.getAll().subscribe(categories => {
      this.categories = categories;
    })
  }

}
