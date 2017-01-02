//BACK END LOGIC
function Pizza(inputSizeValue, inputToppings) {
  this.size = inputSizeValue;
  this.toppings = inputToppings; //this was an array orignally=bad. Instead, it needs to match the parameters in the constructor!
};

Pizza.prototype.pizzaTotal = function() {
  var total = 5;
  if (this.size === "small") {
    total += 0;
  } else if (this.size === "medium") {
    total += 2;
  } else if (this.size === "large") {
    total += 4;
  } else {
    alert("Please choose the size of your Pizza and try again!")
    .html("")
  }
  for(index = 0; index < this.toppings.length; index++) { //.length is used on this.toppings because this is the Back-End logic designed to be called on anything. And .toppings is specified because thats what we are interested in. Just 'this' whould be the whole pizza.
    if (this.toppings[index] === "meat") {
      total += 3;
    } else if (this.toppings[index] === "veggies") { // using 'this.toppings[index]' to grab the value at [index] position within the array.
      total += 2;
    }
  };
  $("#orderTotal").text(total);
  return total; //return needs to be placed at the VERY end, for it will stop and return as soon as it encounters it. Nothing after it will run!

};

//FRONT END LOGIC
$(document).ready(function() {
  $("form#userInput").submit(function(event){
    event.preventDefault();
    // debugger;

    var newToppings = [];
    var newSize = $("#pizzaSize").val();

    if (document.getElementById('pepperoni').checked) { // orignally was grabbing the value var topping = document.getElementById("pepperoni").val(); and pushing the value into the array. But this was unnecessary, for as long as the Checkbox was checked, I can push any value into the array (e.g. 'meat').
      newToppings.push("meat")
    };
    if (document.getElementById('italianSausage').checked) {
      newToppings.push("meat")
    };
    if (document.getElementById('canadianBacon').checked) {
      newToppings.push("meat")
    };
    if (document.getElementById('anchovies').checked) {
      newToppings.push("meat")
    };
    if (document.getElementById('bellPeppers').checked) {
      newToppings.push("veggies")
    };
    if (document.getElementById('olives').checked) {
      newToppings.push("veggies")
    };
    if (document.getElementById('artichoke').checked) {
      newToppings.push("veggies")
    };
    if (document.getElementById('basil').checked) {
      newToppings.push("veggies")
    };
    if (document.getElementById('sunDriedTomatoes').checked) {
      newToppings.push("veggies")
    };
    if (document.getElementById('mushrooms').checked) {
      newToppings.push("veggies")
    };
    var newPizzaOrder = new Pizza(newSize, newToppings); // this Instance is created AFTER the values has been declared and found. And only then it will work using them. ORDER MATTERS!

    console.log(newToppings);
    newPizzaOrder.pizzaTotal(); // Same idea: Order Matters here to run the calculation only after everything is defined and values grabbed.
    $("#totalDisplay").show();


  });
});



