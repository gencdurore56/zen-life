/*
File Name: ComplexCalculator.js
Description: A complex calculator with advanced mathematical functions
*/

// Initialize the calculator object
const Calculator = {
  // Array to store values entered by the user
  values: [],

  // Function to add a value to the calculator
  addValue: function(value) {
    this.values.push(value);
  },

  // Function to clear all values from the calculator
  clear: function() {
    this.values = [];
  },

  // Function to calculate the sum of all values
  sum: function() {
    return this.values.reduce((a, b) => a + b, 0);
  },

  // Function to calculate the product of all values
  product: function() {
    return this.values.reduce((a, b) => a * b, 1);
  },

  // Function to calculate the average of all values
  average: function() {
    return this.sum() / this.values.length;
  },

  // Function to calculate the factorial of a value
  factorial: function(value) {
    if (value === 0 || value === 1) {
      return 1;
    } else {
      return value * this.factorial(value - 1);
    }
  },

  // Function to calculate the square root of a value
  squareRoot: function(value) {
    return Math.sqrt(value);
  },

  // Function to calculate the logarithm of a value
  logarithm: function(value, base) {
    return Math.log(value) / Math.log(base);
  }
};

// Example usage of the calculator
Calculator.addValue(5);
Calculator.addValue(10);
Calculator.addValue(15);

console.log("Sum:", Calculator.sum());
console.log("Product:", Calculator.product());
console.log("Average:", Calculator.average());
console.log("Factorial of 5:", Calculator.factorial(5));
console.log("Square root of 25:", Calculator.squareRoot(25));
console.log("Logarithm of 1000 with base 10:", Calculator.logarithm(1000, 10));

// Clear the calculator values
Calculator.clear();