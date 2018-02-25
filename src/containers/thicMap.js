import React, { Component } from 'react';
import InitialMap from '../components/maps'
import MapWithAMarker from '../components/defaultMap'

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
      // content:'<h1>'+event.name+'</h1>'
    });
    return marker;
  });
  return [].concat.apply([],mark);
});

// markerlist.then(function(marker){
//   console.log(marker.length);
// })
//
// markerlist.then(function(markers){
//   for (var i=0; i<markers.length; i++){
//     console.log(markers[i]);
//   }
// });


class ThicMap extends Component {

  constructor(props) {
    super(props);

    this.state = {
      markers: []
      // markers: markerlist
    }
  }

  render() {
    return (
      <div style={{align:"center"}}>
      <InitialMap
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` ,width:'30%'}} />}
      markers={this.state.markers}
      />
      </div>
    );
  }
}

export default ThicMap;
//
// <InitialMap
//   containerElement={
//     <div style={{height: "100%"}}/>
//   }
//   mapElement={
//     <div style={{height: "100%"}}/>
//   }
//   markers={this.state.markers}
// />
