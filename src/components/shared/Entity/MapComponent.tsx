import { Placemark, YMaps, Map as YanMap } from "@pbe/react-yandex-maps";
import { useState } from "react";

const API_KEY = "408b142c-6392-4e29-8703-3017a9505008";

const MapElement = () => {
  const [isLoading, setLoading] = useState(true);

  const loadingState = () => {
    setLoading(false);
  };
  return (
    <>
      {isLoading && (
        <div
          className="spinner-border position-absolute z-1"
          style={{ width: "200px", height: "200px" }}
          id="spinner"
          role="status"
        ></div>
      )}
      <YanMap
        onLoad={loadingState}
        width="100%"
        height="100%"
        state={{ center: [47.226039, 39.711196], zoom: 13 }}
        modules={["control.ZoomControl"]}
      >
        <Placemark
          geometry={[47.226039, 39.711196]}
          options={{
            iconImageSize: [20, 20],
            preset: "#3b5998",
          }}
        />
      </YanMap>
    </>
  );
};

const MapComponent = () => {
  return (
    <>
      <YMaps
        query={{
          load: "package.full",
          apikey: API_KEY,
        }}
      >
        <MapElement />
      </YMaps>
    </>
  );
};
export default MapComponent;
