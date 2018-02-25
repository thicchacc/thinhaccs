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

markerlist.then(function(marker){
  console.log(marker);
})

markerlist.then(function(markers){
  for (var i=0; i<markers.length; i++){
    console.log(markers[i].content);
  }
});
//
// //
// function event2marker(event){


//
// }
