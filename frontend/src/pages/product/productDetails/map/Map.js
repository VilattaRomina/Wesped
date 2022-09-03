import React from 'react'
import GoogleMaps from 'simple-react-google-maps'

import { MapStyle } from './MapStyle'

export default function Map() {
  return (
    <MapStyle>
    <GoogleMaps
  apiKey={"AIzaSyAzigRs7GV_3NryOpKj7XR7gvbW9vs9HHc"}
  style={{height: "400px", width: "100%"}}
  zoom={15}
  center={{lat: 37.4224764, lng: -122.0842499}}
  markers={{lat: 37.4224764, lng: -122.0842499}} 
/>
    </MapStyle>
    
  )
}
