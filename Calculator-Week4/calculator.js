// Select the display element
const display = document.getElementById("display");

// Keep track of the numbers and operator for the calculation
let num1 = "";
let num2 = "";
let operator = "";

// Add event listeners to the number buttons
for (let i = 0; i <= 9; i++) {
  const button = document.getElementById("button" + i);
  button.addEventListener("click", () => {
    if (operator === "") {
      // If no operator has been selected, add the digit to the first number
      num1 += i;
      display.value = num1;
    } else {
      // If an operator has been selected, add the digit to the second number
      num2 += i;
      display.value = num2;
    }
  });
}

// Add event listeners to the operator buttons
document.getElementById("addButton").addEventListener("click", () => {
  operator = "+";
});

document.getElementById("subtractButton").addEventListener("click", () => {
  operator = "-";
});

document.getElementById("multiplyButton").addEventListener("click", () => {
  operator = "*";
});

document.getElementById("divideButton").addEventListener("click", () => {
  operator = "/";
});

// Add event listener to the equals button
document.getElementById("equalsButton").addEventListener("click", () => {
  let result;
  // Perform the calculation based on the selected operator
  switch (operator) {
    case "+":
      result = parseInt(num1) + parseInt(num2);
      break;
    case "-":
      result = parseInt(num1) - parseInt(num2);
      break;
    case "*":
      result = parseInt(num1) * parseInt(num2);
      break;
    case "/":
      result = parseFloat(num1) / parseFloat(num2);
      break;
  }
  // Display the result
  display.value = result.toString();
  // Reset the variables for the next calculation
  num1 = result.toString();
  num2 = "";
  operator = "";
});

// Add event listener to the clear button
document.getElementById("clearButton").addEventListener("click", () => {
  // Clear the display and reset the variables
  display.value = "";
  num1 = "";
  num2 = "";
  operator = "";
});