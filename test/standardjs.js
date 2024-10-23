// This is a simple function that adds two numbers
function add(a, b) {
    return a + b
  }
  
  // This function checks if a number is even
  function isEven(num) {
    return num % 2 === 0
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5]
  const evenNumbers = numbers.filter(isEven)
  
  console.log('Even numbers:', evenNumbers)
  
  // A function that demonstrates a simple loop
  for (let i = 0; i < numbers.length; i++) {
    console.log(`Number ${numbers[i]} is ${isEven(numbers[i]) ? 'even' : 'odd'}`)
  }
  