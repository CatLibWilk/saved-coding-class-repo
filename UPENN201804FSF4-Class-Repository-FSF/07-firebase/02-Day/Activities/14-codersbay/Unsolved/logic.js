// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)


// Assign the reference to the database to a variable named 'database'
var config = {
  apiKey: "AIzaSyDvQwdZxQd5Zv2X4BINNEikyM1zo6zDB6g",
  authDomain: "andyproject-6448e.firebaseapp.com",
  databaseURL: "https://andyproject-6448e.firebaseio.com",
  projectId: "andyproject-6448e",
  storageBucket: "andyproject-6448e.appspot.com",
  messagingSenderId: "1095837601496"
};
firebase.initializeApp(config);


// Initial Values
var highPrice = 0;
var highBidder = "No one :-(";
var database = firebase.database();

// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot) {

  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

    // Set the variables for highBidder/highPrice equal to the stored values in firebase.
    highPrice = parseInt(snapshot.val().highPrice);
    highBidder = snapshot.val().highBidder;


    // Change the HTML to reflect the stored values
  
  }

  // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
  $("#highest-bidder").text(highBidder);
  $("#highest-price").text(highPrice);

  // Print the data to the console.

  console.log(highBidder, highPrice);


// If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values
  var bidderName = $("#bidder-name").val().trim();
  var bidderPrice = $("#bidder-price").val().trim();


  // Log the Bidder and Price (Even if not the highest)
  if (bidderPrice > highPrice) {

    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase
    database.ref().set({
      highBidder: bidderName,
      highPrice: bidderPrice
    })


    // Log the new High Price
    console.log("the new price: " + bidderName, bidderPrice);



  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});
