import React from 'react'
import { useGoogleMaps } from "react-hook-google-maps"

const GoogleMap = () => {
    const address = { lat: 40.66788858363329, lng: -73.98741730169169 }
    const { ref, map, google } = useGoogleMaps(
        "AIzaSyAXAHpEUKawLeqjBkN-9eFwtOZ3pj8Z_GY",
        {
          center: address,
          zoom: 13,
        },
      );
      console.log(map); 
      console.log(google);
      
      if (map) {
        new google.maps.Marker({ position: address, map });
      }
      
    return (
        <div ref={ref} style={{ width: 400, height: 300 }} />
    )
}


export default GoogleMap;