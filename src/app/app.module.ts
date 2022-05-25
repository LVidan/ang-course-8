import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { AllVehiclesComponent } from './components/all-vehicles/all-vehicles.component';
import { CategoriesComponent } from './components/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiclesComponent,
    AllVehiclesComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
