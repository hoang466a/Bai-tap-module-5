import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UpdateProfileComponent} from './update-profile/update-profile.component';
import {ListUpdateProfileComponent} from './list-update-profile/list-update-profile.component';


const routes: Routes = [
  {path:'create',component: UpdateProfileComponent},
  {path:'list',component:ListUpdateProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
