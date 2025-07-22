// import { Draw } from 'ol/interaction';
import { Vector as VectorSource } from 'ol/source';
import { Vector as VectorLayer } from 'ol/layer';

// new VectorSource (in-memory container for vector features). A place to store the goeometry drawn by the user
const userSource = new VectorSource();
// new VectorLayer (in-memory layer for VectorSource)
const userLayer = new VectorLayer({ source: userSource });

export { userLayer, userSource};

