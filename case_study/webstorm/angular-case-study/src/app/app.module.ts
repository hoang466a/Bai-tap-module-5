import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListServiceComponent } from './service-furama/list-service/list-service.component';
import { EditServiceComponent } from './service-furama/edit-service-room/edit-service.component';
import { CreateServiceComponent } from './service-furama/create-service-house/create-service.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { CreateContractComponent } from './contract/create-contract/create-contract.component';
import { ListContractComponent } from './contract/list-contract/list-contract.component';
import { CreateServiceRoomComponent } from './service-furama/create-service-room/create-service-room.component';
import { CreateServiceVillaComponent } from './service-furama/create-service-villa/create-service-villa.component';
import { EditServiceHouseComponent } from './service-furama/edit-service-house/edit-service-house.component';
import { EditServiceVillaComponent } from './service-furama/edit-service-villa/edit-service-villa.component';
import {NgxPaginationModule} from 'ngx-pagination';

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
    CreateServiceRoomComponent,
    CreateServiceVillaComponent,
    EditServiceHouseComponent,
    EditServiceVillaComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgxPaginationModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
