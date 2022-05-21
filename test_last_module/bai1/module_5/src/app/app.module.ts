import {NgModule} from "@angular/core";
import {ListLandTitleComponent} from "./list-land-title/list-land-title.component";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {NgxPaginationModule} from "ngx-pagination";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    ListLandTitleComponent,

  ],
  imports: [
    BrowserModule,

    NgxPaginationModule,

    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
