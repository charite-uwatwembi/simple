function calculateSum(array) {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
  
 
  const numbers = [1, 2, 3, 4, 5];
  const sum = calculateSum(numbers);
  console.log("Sum:", sum);
  