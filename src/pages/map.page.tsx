import MapComponent from "../components/shared/Entity/MapComponent";
import { ElementWrapper } from "../components/shared/UI/ElementWrapper";

const Map = () => {
  return (
    <>
      <ElementWrapper name="Yandex Map">
        <div
          className="position-relative d-flex justify-content-center align-items-center w-100 "
          id="map"
          style={{ height: "500px" }}
        >
          <MapComponent />
        </div>
      </ElementWrapper>
    </>
  );
};
export default Map;
