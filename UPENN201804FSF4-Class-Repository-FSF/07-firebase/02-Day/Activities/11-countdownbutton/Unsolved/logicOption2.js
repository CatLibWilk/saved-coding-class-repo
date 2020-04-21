// Initialize Firebase (YOUR OWN APP)
var config = {
  apiKey: "AIzaSyDvQwdZxQd5Zv2X4BINNEikyM1zo6zDB6g",
  authDomain: "andyproject-6448e.firebaseapp.com",
  databaseURL: "https://andyproject-6448e.firebaseio.com",
  projectId: "andyproject-6448e",
  storageBucket: "andyproject-6448e.appspot.com",
  messagingSenderId: "1095837601496"
};
firebase.initializeApp(config);

// Set Initial Counter
var initialValue = 100;

var clickCounter = initialValue;

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data.


// Print the initial data to the console.


// Change the html to reflect the initial value.


// Change the clickCounter to match the data in the database


// Log the value of the clickCounter


// Change the HTML Value


// If any errors are experienced, log them to console.

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function() {

  // Reduce the clickCounter by 1


  // Alert User and reset the counter


  // Save new value to Firebase


  // Log the value of clickCounter


});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue


  // Save new value to Firebase


  // Log the value of clickCounter


  // Change the HTML Values

});
