
const locationData = {
  coordinates: [39.711196, 47.226039],
  title: 'You here',
  color: '#3b5998',
  mapFollowsOnDrag: true
};


const initMap = async () => {
  handleSpinnerVisibility(true);

  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer, YMapControls, YMapDefaultFeaturesLayer } = ymaps3;
  const { YMapZoomControl } = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');
  const { YMapDefaultMarker } = await ymaps3.import('@yandex/ymaps3-markers@0.0.1');

  const map = new YMap(document.getElementById('map'), {
    location: { center: locationData.coordinates, zoom: 15 }
  });

  map.addChild((scheme = new YMapDefaultSchemeLayer()));
  map.addChild(new YMapControls({ position: 'right' }).addChild(new YMapZoomControl({})));
  map.addChild(new YMapDefaultFeaturesLayer({ id: 'features' }));
  map.addChild(new YMapDefaultMarker(locationData));
  
  handleSpinnerVisibility(false);
};
const handleSpinnerVisibility = (controller) => {
  document.querySelector('#spinner').style.display = controller ? 'block' : 'none';
};

initMap();
