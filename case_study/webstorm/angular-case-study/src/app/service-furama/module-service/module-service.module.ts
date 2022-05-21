import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateServiceRoomComponent} from "../create-service-room/create-service-room.component";
import {CreateServiceVillaComponent} from "../create-service-villa/create-service-villa.component";
import {EditServiceHouseComponent} from "../edit-service-house/edit-service-house.component";
import {EditServiceVillaComponent} from "../edit-service-villa/edit-service-villa.component";
import {ListServiceComponent} from "../list-service/list-service.component";
import {EditServiceComponent} from "../edit-service-room/edit-service.component";
import {CreateServiceComponent} from "../create-service-house/create-service.component";



@NgModule({
  declarations: [
    CreateServiceRoomComponent,
    CreateServiceVillaComponent,
    EditServiceHouseComponent,
    EditServiceVillaComponent,
    ListServiceComponent,
    EditServiceComponent,
    CreateServiceComponent
  ],
  imports: [
    CommonModule
  ]

})
export class ModuleServiceModule { }
