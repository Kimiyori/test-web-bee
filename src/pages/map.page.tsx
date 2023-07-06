import { useState } from "react";
import MapComponent from "../components/shared/Entity/Map/Map";
import { ElementWrapper } from "../components/shared/UI/WrapperBlock";
import { usePageTitle } from "../hooks/title";

const Map = () => {
    const [seed, setSeed] = useState(1);
    const reset = () => {
      setSeed(Math.random());
    };
  usePageTitle("Map");
  return (
    <>
      <ElementWrapper name="Yandex Map" reload={reset}>
        <div
          className="position-relative d-flex justify-content-center align-items-center w-100 "
          id="map"
          key={seed}
        >
          <MapComponent />
        </div>
      </ElementWrapper>
    </>
  );
};
export default Map;
