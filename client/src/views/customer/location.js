import React, { useState,useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import * as API_ENDPOINTS from "../../api/ApiEndpoints";

import axios from "axios";

const mapStyles = {
  height: "400px",
  width: "100%",
};

const defaultCenter = {
  lat: 0, // Initial latitude
  lng: 0, // Initial longitude
};

const defaultZoom = 15; // Set the default zoom level

const Location = () => {
  const [markerPosition, setMarkerPosition] = useState(defaultCenter);
  const [map, setMap] = useState(null);

  const onMarkerDragEnd = (e) => {
    setMarkerPosition({ lat: e.latLng.lat(), lng: e.latLng.lng() });
  };

  const setDefaultLocation = () => {
    // Get user's current location using geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const currentLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setMarkerPosition(currentLocation);

          // Focus the map on the current location
          if (map) {
            map.panTo(currentLocation);
          }
        },
        (error) => {
          console.error("Error getting current location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
    
  };
const confirmLocation=()=>{
    axios.post("http://localhost:5001/api/UpdateLocation", {
    latitude: markerPosition.lat,
    longitude: markerPosition.lng,
    userId: localStorage.getItem("userId"),
    })
    .then((response) => {
      console.log(response.data);
      alert("Location Updated");
    })
    .catch((error) => {
      console.log(error);
    });
}



  return (
    <div>
      <h1>Choose Your Location</h1>
    <div style={
        {
            display:"flex",
            justifyContent:"center",
        }
    }><button onClick={setDefaultLocation}>Set Current Location</button>
     <button onClick={confirmLocation}>Confirm Location</button>
    </div>  
    
      <LoadScript googleMapsApiKey={'AIzaSyDGf0EXb4I0BQoE2t_IsJmkOJXYTc0S5bA'}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          center={defaultCenter}
          zoom={defaultZoom}
          onLoad={(map) => setMap(map)} // Save the map instance to state
        >
          <Marker
            position={markerPosition}
            draggable={true}
            onDragEnd={onMarkerDragEnd}
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Location;


