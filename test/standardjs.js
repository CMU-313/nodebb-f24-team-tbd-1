// Generated by ChatGPT
function add(a, b) {
    return a + b
  }
  

  function isEven(num) {
    return num % 2 === 0
  }
  

  const numbers = [1, 2, 3, 4, 5]
  const evenNumbers = numbers.filter(isEven)
  
  console.log('Even numbers:', evenNumbers)
  

  for (let i = 0; i < numbers.length; i++) {
    console.log(`Number ${numbers[i]} is ${isEven(numbers[i]) ? 'even' : 'odd'}`)
  }
  