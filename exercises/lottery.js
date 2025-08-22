function calculateChances(numbers, additionalNumber) {
    // Add the additional number to the list
    const allNumbers = [...numbers, additionalNumber];
  
    // Calculate the total sum of the numbers
    const totalSum = allNumbers.reduce((sum, num) => sum + num, 0);
  
    // Calculate chances (percentages) for each number
    const chances = allNumbers.map(num => ({
      number: num,
      chance: ((num / totalSum) * 100).toFixed(2) + "%" // Format to 2 decimal places
    }));
  
    return chances;
  }
  
  // Example input
  const numbers = [7, 45, 6, 27, 69];
  const additionalNumber = 13;
  
  // Calculate and display results
  console.log(calculateChances(numbers, additionalNumber));
  