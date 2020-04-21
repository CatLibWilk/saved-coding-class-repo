var request = require("request");
var fs = require("fs");


var TV = function() {
  this.findShow = function(show) {
    // The following URL can be used to search the TV Maze API for a given show
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;
    request(URL, function (err, response, body){
      if (err){
        console.log("error in request");
      };
      var data = JSON.parse(body, null, 2);

      var divider = "\n<-------------------------------------------->";
      var show = [
        "Show: " + data.name,
        "Genre: " + data.genres[0],
        "Network: " + data.network["name"],
        "Rating: " + data.rating["average"],
        "Summary: " + data.summary,
      ].join("\n\n")

      fs.appendFile("log.txt", show + divider, function(error){
        if(error){
          console.log("error");
        }
      })
    });
  };
};

module.exports = TV;
