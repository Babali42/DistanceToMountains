import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import { defaults as defaultControls, OverviewMap } from 'ol/control';
import * as olCoordinates from 'ol/coordinate';
import MousePosition from 'ol/control/mouseposition';

@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.scss']
})
export class MapComponentComponent implements OnInit {

  constructor() { }

  private map;
  private mousePosition;
  private overviewMapControl;
  private source;

  ngOnInit(): void {
    console.log("INIT");

    this.source = new OSM();
    this.overviewMapControl = new OverviewMap({
      layers: [
        new TileLayer({
          source: this.source
        })
      ]
    });



    this.map = new Map({
      target: 'hotel_map',
      controls: defaultControls().extend([
        this.overviewMapControl
      ]),
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
      coordinateFormat: olCoordinates.createStringXY(2),
      projection: 'EPSG:4326',
      target: document.getElementById('myposition'),
      undefinedHTML: '&nbsp;'
    });
  
    this.map.addControl(this.mousePosition);
  }

  clickMap(event:any):void{
    console.log(event);
    console.log(this.mousePosition);
  }

  

}
