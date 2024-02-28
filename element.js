function findMaxElement(array) {
    if (array.length === 0) {
      
      return undefined;
    }
  
    return Math.max(...array);
  }
  
  
  const numbers = [1, 7, 3, 12, 5];
  const maxElement = findMaxElement(numbers);
  console.log("Max Element:", maxElement);
  