import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { MapComponentComponent } from './map-component/map-component.component';
import { AddOrEditPlaceComponent } from './add-or-edit-place/add-or-edit-place.component';

@NgModule({
  declarations: [
    MapComponentComponent,
    AddOrEditPlaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [MapComponentComponent,AddOrEditPlaceComponent]
})
export class AppModule { }
