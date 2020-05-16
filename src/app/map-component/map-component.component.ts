import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import * as olCoordinates from 'ol/coordinate';
import MousePosition from 'ol/control/MousePosition';
import {defaults as defaultInteractions, DragRotateAndZoom} from 'ol/interaction';
import { Place } from '../places/place';

@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.scss']
})
export class MapComponentComponent implements OnInit {

  constructor() { }

  @ViewChild('selectedPosition') selectedPositionDiv: ElementRef;
  private map;
  private mousePosition;
  public place;

  ngOnInit(): void {
    this.map = new Map({
      target: 'place_map',
      interactions: defaultInteractions(),
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: olProj.fromLonLat([5.9913, 45.1709]),
        zoom: 5
      }),
    });

    this.mousePosition = new MousePosition({
      coordinateFormat: olCoordinates.createStringXY(4),
      projection: 'EPSG:4326',
      target: document.getElementById('myposition'),
      undefinedHTML: '&nbsp;'
    });
  
    this.map.addControl(this.mousePosition);
    this.place = new Place({name:"Roche des vents"});
  }

  clickMap(event:any):void{
    const coordinates = this.selectedPositionDiv.nativeElement.innerText.split(', ');
    this.place.long = coordinates[0];
    this.place.lat = coordinates[1];
  }
}
