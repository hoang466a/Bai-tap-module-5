import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
// @ts-ignore
import {Observable} from "rxjs/dist/types";
import {Category} from "../models/category/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  URL_LIST = 'http://localhost:3000/category';
  localList:string[];
  localist=["Hà Nội","Hồ Chí Minh","Đà Nẵng"];
  constructor(private http: HttpClient) { }

  getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.URL_LIST);
  }

  findById(id: number): Observable<Category> {
    // @ts-ignore
    return this.http.get<Category>(this.URL_LIST+'/'+id);
  }
}


