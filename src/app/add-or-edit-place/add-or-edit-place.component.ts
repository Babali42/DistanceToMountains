import { Component, OnInit } from '@angular/core';
import { Place } from '../places/place';

@Component({
  selector: 'app-add-or-edit-place',
  templateUrl: './add-or-edit-place.component.html',
  styleUrls: ['./add-or-edit-place.component.scss']
})
export class AddOrEditPlaceComponent implements OnInit {

  constructor() { }

  public place;

  ngOnInit(): void {
    this.place = new Place({name:"Roche des vents"});
  }
}
