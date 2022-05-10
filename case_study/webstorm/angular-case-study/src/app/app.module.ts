import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListServiceComponent } from './list-service/list-service.component';
import { EditServiceComponent } from './edit-service-room/edit-service.component';
import { CreateServiceComponent } from './create-service-house/create-service.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CreateContractComponent } from './create-contract/create-contract.component';
import { ListContractComponent } from './list-contract/list-contract.component';
import { RoomComponent } from './room/room.component';
import { CreateServiceRoomComponent } from './create-service-room/create-service-room.component';
import { CreateServiceVillaComponent } from './create-service-villa/create-service-villa.component';
import { EditServiceHouseComponent } from './edit-service-house/edit-service-house.component';
import { EditServiceVillaComponent } from './edit-service-villa/edit-service-villa.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ListServiceComponent,
    EditServiceComponent,
    CreateServiceComponent,
    ListCustomerComponent,
    EditCustomerComponent,
    CreateCustomerComponent,
    CreateContractComponent,
    ListContractComponent,
    RoomComponent,
    CreateServiceRoomComponent,
    CreateServiceVillaComponent,
    EditServiceHouseComponent,
    EditServiceVillaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
