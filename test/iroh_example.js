const Iroh = require('iroh'); // Import the Iroh library

const code = `
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
factorial(3);
`;

let stage = new Iroh.Stage(code); // Create a new stage with the code

console.log(stage); // Check the available methods










