import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListServiceComponent} from './service-furama/list-service/list-service.component';


const routes: Routes = [

  {path: '', component: ListServiceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
