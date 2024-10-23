const Iroh = require('iroh'); // Ensure this is correct
const iroh = new Iroh(); // Create an instance

iroh.start(); // Start capturing

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

// Capture function calls
iroh.on('CALL', (fn, args) => {
  console.log(`Function called: ${fn.name}, with arguments: ${args}`);
});

// Capture if statements
iroh.on('IF', (test) => {
  console.log(`If condition checked: ${test}`);
});

// Call the function
factorial(3);

iroh.stop(); // Stop capturing




