//BACK END LOGIC
function Pizza(size) {
  this.size = size;
  this.toppings = [];
};

Pizza.prototype.pizzaTotal = function() {
  var total = 0;
  if (this.size === "small") {
    total += 0;
  } else if (this.size === "medium") {
    total += 2;
  } else if (this.size === "large") {
    total += 4;
  return total;
  };

  if (this.toppings === "meat") {
    total += 3;
  } else if (this.toppings === "veggies") {
    total += 2;
  return total;
  };
  $("#totalDisplay").show();
  $("#orderTotal").text(total);

};

//FRONT END LOGIC
$(document).ready(function() {
  $("form#userInput").submit(function(event){
    event.preventDefault();


    var newPizzaOrder = new Pizza(newSize, newToppings )
    var newSize = $("#pizzaSize").val()

    // TRYING TO MAKE IT WORK WITH AN ARRAY AND TARGETING EACH CHECKBOX TO GET THE VALUE:

    var newToppings = [];

    if (document.getElementById('pepperoni').checked) {
      var topping1 = $("#pepperoni").val()
      newToppings.push(topping1)
    };
    if (document.getElementById('italianSausage').checked) {
      var topping2 = $("#italianSausage").val()
      newToppings.push(topping2)
    };
    if (document.getElementById('italianSausage').checked) {
      var topping3 = $("#italianSausage").val()
      newToppings.push(topping3)
    };
    if (document.getElementById('anchovies').checked) {
      var topping4 = $("#anchovies").val()
      newToppings.push(topping4)
    };
    if (document.getElementById('bellPeppers').checked) {
      var topping5 = $("#bellPeppers").val()
      newToppings.push(topping5)
    };
    if (document.getElementById('olives').checked) {
      var topping6 = $("#olives").val()
      newToppings.push(topping6)
    };
    if (document.getElementById('artichoke').checked) {
      var topping7 = $("#artichoke").val()
      newToppings.push(topping7)
    };
    if (document.getElementById('basil').checked) {
      var topping8 = $("#basil").val()
      newToppings.push(topping8)
    };
    if (document.getElementById('sunDriedTomatoes').checked) {
      var topping9 = $("#sunDriedTomatoes").val()
      newToppings.push(topping9)
    };
    if (document.getElementById('mushrooms').checked) {
      var topping10 = $("#mushrooms").val()
      newToppings.push(topping10)
    };

    newPizzaOrder.pizzaTotal()

  });
});
    // $(".toppings").each(function () {
    //   var topping1 = $(this).find("#pepperoni").val();
    //   var topping2 = $(this).find("#italianSausage").val();
    //   var topping3 = $(this).find("#canadianBacon").val();
    //   var topping4 = $(this).find("#anchovies").val();
    //   var topping5 = $(this).find("#bellPeppers").val();
    //   var topping6 = $(this).find("#mushrooms").val();
    //   var topping7 = $(this).find("#olives").val();
    //   var topping8 = $(this).find("#artichoke").val();
    //   var topping9 = $(this).find("#basil").val();
    //   var topping10 = $(this).find("#sunDriedTomatoes").val();
    //
    //   var toppingSelection = new Pizza(topping1, topping2, topping3, topping4, topping5, topping6, topping7, topping8, topping9, topping10);
    //




    // TRYING TO MAKE IT WORK WITH getElementById TO TARGET SPECIFIC ID'S:

    // var topping = document.getElementById("pepperoni").value;
    // var topping = document.getElementById("italianSausage").value;
    // var topping = document.getElementById("canadianBacon").value;
    // var topping = document.getElementById("anchovies").value;
    // var topping = document.getElementById("bellPeppers").value;
    // var topping = document.getElementById("mushrooms").value;
    // var topping = document.getElementById("artichoke").value;
    // var topping = document.getElementById("basil").value;
    // var topping = document.getElementById("sunDriedTomatoes").value;
    // var topping = document.getElementById("pepperoni").value;
    //var toppings = document.getElementById('toppings').checked;
    //var toppings = $(".toppings:checked").val();
    //var toppings = document.getElementsByClassName("toppings").val();
