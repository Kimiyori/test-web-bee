import { useState } from 'react';
import MapComponent from 'components/shared/Entity/Map/Map';
import ElementWrapper from 'components/shared/UI/WrapperBlock';

const Map = () => {
  const [seed, setSeed] = useState(Math.random());
  const reset = () => {
    setSeed(Math.random());
  };
  return (
    <>
      <ElementWrapper name="Yandex Map" onReload={reset}>
        <div className="position-relative d-flex justify-content-center align-items-center w-100 " id="map" key={seed}>
          <MapComponent />
        </div>
      </ElementWrapper>
    </>
  );
};
export default Map;
