// var sharePizza = cutPizzaSlices(8);
// console.log(sharePizza(2));
//   // prints "Each person gets 4.00 slices of pizza"
// console.log(sharePizza(3));
//   // prints "Each person gets 2.67 slices of pizza"
var cutPizzaSlices = 8;

function sharePizza(cutPizzaSlices, y) {
  console.log("Each person gets " + cutPizzaSlices / y + " slices of pizza");
}

sharePizza(cutPizzaSlices, 2);

sharePizza(cutPizzaSlices, 3);
