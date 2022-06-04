import React from "react";
import { Map, GoogleApiWrapper ,Marker} from "google-maps-react";
import { useState, useEffect } from "react";

function RentalsMap({ locations, google, setHighLight }) {
  const [center, setCenter] = useState();
  useEffect(() => {
    var arr = Object.keys(locations);
    var getLat = (key) => locations[key]["lat"];
    var avgLat = arr.reduce((a, c) => a + Number(getLat(c)), 0) / arr.length;

    var getLng = (key) => locations[key]["lng"];
    var avgLng = arr.reduce((a, c) => a + Number(getLng(c)), 0) / arr.length;

    setCenter({ lat: avgLat, lng: avgLng });
  }, [locations]);

  return (
    <>
      {center && (
        <Map
          google={google}
          containerStyle={{
            width: "50vw",
            height: "calc(100vh - 135px)", //PLEASE ALWAYS KEEP THE - SIGN SEPERATED OR IT WILL NOT RENDER YOUR MAP
          }}
          center={center}
          initialCenter={locations[0]}
          zoom={13}
          disableDefaultUI={true}
        >
          {locations.map((coords, i) => (
            <Marker position={coords} onClick={() => setHighLight(i)} />
          ))}
        </Map>
      )}
    </>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDav2AiYDTJePRGx9WKD2ObjosnTRNEHag",
})(RentalsMap);
