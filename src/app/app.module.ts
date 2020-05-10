import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponentComponent } from './map-component/map-component.component';
import { AddOrEditPlaceComponent } from './add-or-edit-place/add-or-edit-place.component';

@NgModule({
  declarations: [
    AppComponent,
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
  bootstrap: [AppComponent,MapComponentComponent,AddOrEditPlaceComponent]
})
export class AppModule { }
