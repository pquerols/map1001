import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Style, Icon } from 'ol/style';

const marker = new Feature({
  geometry: new Point([0, 0]),
});

const vectorLayer = new VectorLayer({
  source: new VectorSource({
    features: [marker],
  }),
  style: new Style({
    image: new Icon({
      src: 'https://openlayers.org/en/latest/examples/data/icon.png',
      scale: 0.5,
    }),
  }),
});

// comentary to check Github connection

export default vectorLayer;