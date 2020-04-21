// Grab the request package...
var request = require("request");
var fs = require('fs');

// Run the request function...
// The request function takes in a URL then returns three arguments:
// 1. It provides an error if one exists.
// 2. It provides a response (usually that the request was successful)
// 3. It provides the actual body text from the website <---- what actually matters.
request("https://en.wikipedia.org/wiki/Kudos_(granola_bar)", function(error, response, body) {

  // If the request was successful...
  if (!error && response.statusCode === 200) {

    // Then log the body from the site!
    console.log(body);
    fs.writeFile("granola.html", body, function(err){
      if(err){
        console.log("error");
    }});
  }
});
