// import { Draw } from 'ol/interaction';
import { Vector as VectorSource } from 'ol/source';
import { Vector as VectorLayer } from 'ol/layer';

// this creates a new VectorSource (in-memory container for vector features). A place to store the goeometry drawn by the user
const userSource = new VectorSource();

// this creates a new VectorLayer (in-memory layer for VectorSource)
const userLayer = new VectorLayer({ source: userSource });

// Este script era para cuando teniamos como input predefinido un Polygon
// const userDraw = new Draw({
//   source: userVector,
//   type: 'Polygon', // or 'Point', 'LineString'
// });

export { userLayer, userSource};

