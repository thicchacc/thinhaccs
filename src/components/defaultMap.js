import React, { Component}  from 'react';
import {withGoogleMap, GoogleMap, InfoWindow, Marker } from "react-google-maps"

const MapWithAMarker = withGoogleMap(props =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    <Marker
      position={{ lat: -34.397, lng: 150.644 }}
    />
  </GoogleMap>
);

export default MapWithAMarker
