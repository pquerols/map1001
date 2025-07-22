import GeoJSON from 'ol/format/GeoJSON';

export function exportGeoJSON(vectorSource) {
  const format = new GeoJSON();
  const features = vectorSource.getFeatures();
  const geojsonStr = format.writeFeatures(features, {
    featureProjection: 'EPSG:3857'
  });

  const blob = new Blob([geojsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = 'geometria.geojson';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

