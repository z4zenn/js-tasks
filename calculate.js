const readline = require("readline");

// create interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 === 0 ? "Cannot divide by 0" : num1 / num2;
    default:
      return "Invalid operator";
  }
}

// take inputs one by one
rl.question("Enter first number: ", function(n1) {
  rl.question("Enter operator (+, -, *, /): ", function(op) {
    rl.question("Enter second number: ", function(n2) {
      
      let num1 = parseFloat(n1);
      let num2 = parseFloat(n2);

      let res = calculate(num1, num2, op);
      console.log("Result:", res);

      rl.close();
    });
  });
});
