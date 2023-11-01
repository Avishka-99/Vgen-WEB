import React, { useEffect, useRef,useState } from 'react';
import Axios from '../../api/Axios';

const Destination = () => {
  const mapRef = useRef(null);
  const userId = localStorage.getItem("userId");
  const deliveryPersonId = localStorage.getItem("delivery");
  const [origin, setOrigin] = useState({ lat: 0, lng: 0 });
  const [destination, setDestination] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await Axios.get(
          "http://localhost:5001/api/getUserLocation",
          {
            params: {
              userId: userId,
            },
          }
        );
        console.log(response.data);
        setOrigin({
          lat: response.data.map((item) => item.latitude),
          lng: response.data.map((item) => item.longitude),
        });
        console.log(origin);
      }
      catch(error){
        console.log(error);
      }
    }
    fetchData();
  }
  , [userId]);
  
  useEffect(() => {
    const fetchData1 = async () => {
      try{
        console.log(deliveryPersonId);
        const response = await Axios.get(
          "http://localhost:5001/api/getDeliveryPersonLocation",
          {
            params: {
              deliveryPersonId: deliveryPersonId,
            },
          }
        );
        console.log(response.data);
        setDestination({
          lat: response.data.map((item) => item.latitude),
          lng: response.data.map((item) => item.longitude),
        });
       console.log(destination);

      }
      catch(error){
        console.log(error);
      }
    }
    fetchData1();
  }
  , [deliveryPersonId]);
  

   //
  useEffect(() => {
    const mapOptions = {
      center: { lat: (origin.lat + destination.lat) / 2, lng: (origin.lng + destination.lng) / 2 },
      zoom: 8,
    };

    const map = new window.google.maps.Map(mapRef.current, mapOptions);

    const directionsService = new window.google.maps.DirectionsService();
    const directionsRenderer = new window.google.maps.DirectionsRenderer();

    const calculateRoute = () => {
      const request = {
        origin: new window.google.maps.LatLng(origin.lat, origin.lng),
        destination: new window.google.maps.LatLng(destination.lat, destination.lng),
        travelMode: 'DRIVING',
      };

      directionsService.route(request, (result, status) => {
        if (status === 'OK') {
          directionsRenderer.setDirections(result);
        }
      });
    };

    calculateRoute();
    directionsRenderer.setMap(map);
  }, [origin, destination]);

  return <div ref={mapRef} style={{ height: '400px', width: '100%' }}></div>;
};

export default Destination;

