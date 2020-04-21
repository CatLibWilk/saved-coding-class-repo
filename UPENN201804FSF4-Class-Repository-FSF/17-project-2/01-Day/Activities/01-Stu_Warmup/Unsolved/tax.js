var calculateTax = function(price) {

  if(typeof(price) !== "number"){
    throw new Error("not a number")
  };
  var postTax = (price * 1.08);
  return Number.parseFloat(postTax).toFixed(2);;
};

module.exports = calculateTax;
