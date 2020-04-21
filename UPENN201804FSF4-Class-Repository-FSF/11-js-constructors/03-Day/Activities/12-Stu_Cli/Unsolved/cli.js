// Write code here to parse command line arguments and store them into variables
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for

var searchType = process.argv[2];
var fullInput = process.argv;
var input = fullInput.slice(3).join(" ");

console.log(typeof input);


if(!searchType){
    searchType = "show";
};

if(!input){
    input = "The Andy Griffith Show";
}

switch(searchType){
    case "actor":
        console.log(`You are searching for the actor ${input}`);
        // actorSearch();
        break;
    case "show":
    console.log(`You are searching for the tv show ${input}`);
        // showSearch();
        break;
    default:
        console.log("Please search for an actor or tv show");
}

