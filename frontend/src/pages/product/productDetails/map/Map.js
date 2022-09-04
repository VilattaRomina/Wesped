import React from 'react'
import GoogleMaps from 'simple-react-google-maps'

import { MapStyle } from './MapStyle'

export default function Map({product}) {
  return (
    <MapStyle>
    <GoogleMaps
  apiKey={"AIzaSyAzigRs7GV_3NryOpKj7XR7gvbW9vs9HHc"}
  style={{height: "400px", width: "100%"}}
  zoom={15}
  center={{lat: product.longitude, lng: product.latitude}}
  markers={{lat: product.longitude, lng: product.latitude}} 
/>
    </MapStyle>
    
  )
}
