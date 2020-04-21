// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)
var config = {
    apiKey: "AIzaSyDvQwdZxQd5Zv2X4BINNEikyM1zo6zDB6g",
    authDomain: "andyproject-6448e.firebaseapp.com",
    databaseURL: "https://andyproject-6448e.firebaseio.com",
    projectId: "andyproject-6448e",
    storageBucket: "andyproject-6448e.appspot.com",
    messagingSenderId: "1095837601496"
  };
  firebase.initializeApp(config);

// Assign the reference to the database to a variable named 'database'
var database = firebase.database();

// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

//  At the page load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot){
    console.log(snapshot);
    // If Firebase has a highPrice and highBidder stored (first case)
    if(snapshot.child("highPrice").exists() && snapshot.child("highBidder").exists()){

// Set the variables for highBidder/highPrice equal to the stored values in firebase.
highPrice = parseInt(snapshot.val().highPrice);
highBidder = snapshot.val().highBidder;


// Change the HTML to reflect the stored values
$("#highest-bidder").text(highBidder);
$("#highest-price").text(highPrice);


// Print the data to the console.
console.log(highBidder)
console.log(highPrice)


// Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
}else{

// Change the HTML to reflect the initial values
$("#highest-bidder").text(initialBidder);
$("#highest-price").text(initialBid);


// Print the data to the console.
console.log("from else statement: " + initialBid);
console.log("from else statement: " + initialBidder);
}});







// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event){



// prevent form from submitting with event.preventDefault() or returning false
event.preventDefault();

// Get the input values
var newBidder = $("#bidder-name").val().trim();
var newPrice = $("#bidder-price").val().trim();


// Log the Bidder and Price (Even if not the highest)

console.log("from click event: " + newBidder);
console.log("from click event: " + newPrice);


// If Then statements to compare against previous high bidder
if(newPrice > highPrice){


// Alert that they are High Bidder
alert("you're the new high bidder");


// Save the new price in Firebase
database.ref().set({
    highPrice: newPrice,
    highBidder: newBidder
})

// Log the new High Price
    console.log("from pos if statement: " + newBidder + " " + newPrice);


// Store the new high price and bidder name as a local variable (could have also used the firebase variable)
    


// Change the HTML to reflect the new high price and bidder
    $("#highest-bidder").text(newBidder);
    $("#highest-price").text(newPrice);
}else{
// Else tell user their bid was too low via alert
alert("bid too low");

}});