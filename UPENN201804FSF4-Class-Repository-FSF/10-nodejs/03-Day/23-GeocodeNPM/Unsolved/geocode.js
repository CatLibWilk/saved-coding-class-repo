// Instructions: 
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.
var geocoder = require("geocoder");
var input = process.argv[2];

geocoder.geocode(input, function ( err, data ) {
    if(err){
        console.log("error");
    }
    console.log(data, null, 2);
    var lat = data.results[0].geometry.location.lat;
    var lng = data.results[0].geometry.location.lng;
    console.log("latitude is ", lat);
    console.log("longitude is ", lng);
  });

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format. 

// ========================================================================================================================

// Include the geocoder NPM package (Remember to run "npm install geocoder"!)




// Take in the command line arguments




// Build your address as an array or string




// Then use Geocoder NPM to geocode the address
