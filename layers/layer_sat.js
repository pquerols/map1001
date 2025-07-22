import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";

const satellite_Layer = new TileLayer({
  source: new XYZ({
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    minZoom: 0,
    maxZoom: 19,
  }),
  // Performance: Limiting zoom can improve performance and reduce unnecessary tile requests. Prevents users from zooming in too far where no useful data is available.
  opacity: 1, // 0 = fully transparent, 1 = fully opaque
});

export default satellite_Layer;