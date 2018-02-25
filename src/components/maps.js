import React, { Component}  from 'react';
import {withGoogleMap, GoogleMap, InfoWindow, Marker } from "react-google-maps"

// const InitialMap = withGoogleMap(props =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: -34.397, lng: 150.644 }}
//     // />
//   >
//   </GoogleMap>
// );

const InitialMap = withGoogleMap(props =>{

  var EventSearch = require("facebook-events-by-location-core");

  var es = new EventSearch();

  var pghGPS = {
    "lat": 40.4406,
    "lng": -79.9959
  }
  var list = es.search(pghGPS).then(
    function (events) {
      return events.events;
      }
    );
  var markerlist = list.then(function(event){
    var mark = event.map(function(event){
      var coord = {lat:event.place.location.latitude,lng:event.place.location.longitude};
      var marker = [];
      marker.push({
        position:coord,
        content:'<li>'+event.name+'</li>'
      });
      return marker;
    });
    return [].concat.apply([],mark);
  });

  return (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 40.4406, lng: -79.9959}}
  >
    // {<Marker position={{ lat: -34.397, lng: 150.644 }} />}
    markerlist.then(function(markers){
      // for (var i=2; i<5; i++){
      // return <Marker position={gah[i].position} />;
      // }
    });
  </GoogleMap>
  )
});


export default InitialMap
