import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {ListLandTitleComponent} from "./list-land-title/list-land-title.component";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";


const routes: Routes = [
  {path: '', component: ListLandTitleComponent},
];

@NgModule({
  declarations:[AppComponent,
    ListLandTitleComponent,],
  imports: [RouterModule.forRoot(routes),
  BrowserModule,
  FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
