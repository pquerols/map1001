import { Map, View } from "ol";
import osm_layer from './layers/layer_osm.js';
import satellite_Layer from './layers/layer_sat.js';
import vectorLayer from './layers/layer_vector.js';
import { userLayer, userSource } from './layers/layer_user.js';
import {addInter_drawtype} from './interactions/inter_drawtype.js';
import './style.css'; 
import { exportGeoJSON } from './controls/export_geojson.js';

document.getElementById('layerSwitcher').addEventListener('change', (e) => {
  const value = e.target.value;
  osm_layer.setVisible(value === 'osm');
  satellite_Layer.setVisible(value === 'sat');
});

const map = new Map({
  target: "map_element", // Ensure this matches the ID in index.html and style.css
  layers: [satellite_Layer, osm_layer, vectorLayer, userLayer], // Add satellite_Layer if needed
  view: new View({ center: [0, 0], zoom: 2 }),
});

addInter_drawtype(map, userSource, 'Point');

document.getElementById('type-selector').addEventListener('change', function () {
  const selectedType = this.value;
  addInter_drawtype(map, userSource, selectedType);
});

document.getElementById('btnExport').addEventListener('click', () => {
  exportGeoJSON(userLayer.getSource());
});
