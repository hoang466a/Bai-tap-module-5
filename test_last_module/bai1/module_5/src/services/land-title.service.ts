import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LandTitle} from "../models/landTitle/land-title";
// @ts-ignore
import {Observable} from "rxjs/dist/types";

@Injectable({
  providedIn: 'root'
})
export class LandTitleService {
  URL_LIST = 'http://localhost:3000/landTitle';

  localList=["Hà Nội","Hồ Chí Minh","Đà Nẵng"];
  constructor(private http: HttpClient) {
  }

  // @ts-ignore
  getAllLandTitle(): Observable<LandTitle[]> {
    return this.http.get<LandTitle[]>(this.URL_LIST);
  }

  getAllLocal(){
    return this.localList;
  }


  saveLandTitle(landTitle:LandTitle): Observable<LandTitle> {
    return this.http.post<LandTitle>(this.URL_LIST, landTitle);
  }

  findById(id: number): Observable<LandTitle> {
    // @ts-ignore
    return this.http.get<LandTitle>(this.URL_LIST+'/'+id);
  }

  updateLandTitle(id: number, landTitle: LandTitle): Observable<LandTitle> {
    return this.http.put<LandTitle>(this.URL_LIST+'/'+id,landTitle);
  }

  deleteLandTitle(id:number): Observable<LandTitle>{
    return this.http.delete<LandTitle>(this.URL_LIST+'/'+id);
  }

  /*find(customerName: string){
    return this.http.get<any>(this.URL_LIST+'?customerName_like='+customerName);
  }*/

}
