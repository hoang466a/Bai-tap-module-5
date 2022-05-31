import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import {environment} from '../environments/environment';

import {ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ListUpdateProfileComponent } from './list-update-profile/list-update-profile.component';



@NgModule({
  declarations: [
    AppComponent,
    UpdateProfileComponent,
    ListUpdateProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
