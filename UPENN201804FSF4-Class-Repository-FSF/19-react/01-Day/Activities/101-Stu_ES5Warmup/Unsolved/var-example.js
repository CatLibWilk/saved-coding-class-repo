log(name); // output: undefined

var tinyize = function(name) {
  log(name); // output: Rick

  log(myName); // output: undefined, "hoisted" so the there's no error but the value of the var hasn't been defined
  var myName = "Tiny " + name + "!";
  log(myName); // output: Tiny Rick

  return myName;
};

var name = tinyize("Rick");
log(name); // output: ?

try{
  log(myName); // output: ?
  }
catch(error){
  console.log("error in log myName function")
  }

log(i); // output: ?
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: ?
  }, 100);
}
log(i); // output: ?

// helper function to log current line number and the passed in string
// e.g. "Line 24: Hello World"
function log(string) {
  var callerLine = new Error().stack.split("\n")[2];
  var lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}
