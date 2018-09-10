function deg2rad(deg) {
  return deg * (Math.PI/180)
}

var lat1= 47.915956;
var lon1= 106.903681;  //47.909465, 106.913122

var lat2= 47.918505;
var lon2= 106.911639;

  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  console.log(Math.abs(d));


db.beeco_poi.findOne(
   {
     coordinates:
       { $near :
          {
            $geometry: { type: "Point",  coordinates: [ 106.907738, 47.909796 ] },
            $minDistance: 0,
            $maxDistance: 5000
          }
       }
   }
)

db.events.find(
   { coordinates : { $near : [ 106.903681, 47.915956 ], $maxDistance: 0.10 } }
)

db.beeco_poi.findOne({ geometry: { $geoIntersects: { $geometry: { type: "Point", coordinates: [ 106.903681, 47.915956 ] } } } })
