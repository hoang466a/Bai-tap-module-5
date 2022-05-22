import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LandTitle} from "../model/land-title";
import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  URL_LIST = 'http://localhost:8080/landTitle';
  constructor(private http: HttpClient) { }

  getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.URL_LIST);
  }

  findById(id: number): Observable<Category> {
    // @ts-ignore
    return this.http.get<Category>(this.URL_LIST+'/'+id);
  }

}
