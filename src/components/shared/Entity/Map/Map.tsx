import { YMaps, useYMaps } from '@pbe/react-yandex-maps';
import LoadingElement from 'components/core/LoadingElement/LoadingElement';
import { mapData } from 'data/map';
import { FC, useEffect, useRef } from 'react';

const MapElement = () => {
  const mapRef = useRef(null);
  const ymaps = useYMaps(['Map', 'Placemark']);

  useEffect(() => {
    if (!ymaps || !mapRef.current) {
      return;
    }
    const map = new ymaps.Map(mapRef.current, {
      center: mapData.location,
      zoom: mapData.zoom,
    });
    const placemark = new ymaps.Placemark(mapData.placemark.location, {
      iconImageSize: mapData.placemark.iconImage,
      preset: mapData.placemark.preset,
    });
    map.geoObjects.add(placemark);
  }, [ymaps]);

  return ymaps ? <div ref={mapRef} id="map" /> : <LoadingElement />;
};
const MapComponent: FC = () => {
  return (
    <>
      <YMaps
        query={{
          load: 'package.full',
          apikey: process.env.REACT_APP_MAP_API_KEY,
        }}
      >
        <MapElement />
      </YMaps>
    </>
  );
};
export default MapComponent;
