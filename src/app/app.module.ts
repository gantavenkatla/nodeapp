import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ReplaceVehicleComponent } from './replace-vehicle/replace-vehicle.component';


@NgModule({
  declarations: [
    AppComponent,
    ReplaceVehicleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
