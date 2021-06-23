import { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

function HeatMap() {
  const [viewport, setViewport] = useState({
    latitude: 23.6978,
    longitude: 120.9605,
    width: "100vw",
    height: "100vh",
    zoom: 6,
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.NODE_ENV === "production" ? process.env.MAP_BOX_TOKEN : process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/springkun/ckq8p5a2512vd19q0w156ebkt"
        onViewportChange={(NewViewport) => {
          setViewport(NewViewport);
        }}
      ></ReactMapGL>
    </div>
  );
}

export default HeatMap;
