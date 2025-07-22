import { Draw } from "ol/interaction";

let draw;

function addInter_drawtype(map, userSource, drawType) {
  if (draw) map.removeInteraction(draw);
  draw = new Draw({
    source: userSource,
    type: drawType,
  });
  draw.on("drawend", function (event) {
    const feature = event.feature;
    const geometry = feature.getGeometry();
    const type = geometry.getType();
    const coords = geometry.getCoordinates();
    const infoDiv = document.getElementById("feature-info");
    if (infoDiv) {
      infoDiv.innerHTML = `
        <strong>Tipo:</strong> ${type}<br>
        <strong>Coordenadas:</strong> ${JSON.stringify(coords, null, 2)}
        `;
    }
  });
  map.addInteraction(draw);
}

export { addInter_drawtype };
