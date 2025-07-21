// Task 1
let orders = [
    ["Latte", "Macchiato", "Tea"],
    ["Croissant", "Muffin", "Cookie"]
];

// Task 2
console.log("Number of drinks: ", + orders[0].length);
console.log("Number of pastries: ", + orders[1].length);

// Task 3
console.log("First order: " + orders[0][0]);
console.log("Second order: " + orders[1][2]);

// Task 4 
console.log(orders.indexOf("Muffin"));

// Task 5 
for (let i = 0; i < orders[0].length; i++) {
  console.log(orders[0][i]);
}

orders[0].push("Flat White");
console.log("New number of drinks: " + orders[0].length)