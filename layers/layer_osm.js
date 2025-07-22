import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";

const osm_layer = new TileLayer({
  source: new OSM(),
  opacity: 1, // 0 = fully transparent, 1 = fully opaque
});

export default osm_layer;
