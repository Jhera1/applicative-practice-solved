/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  const asteroidCountsByYear = data.asteroids.reduce((acc, asteroid) => {
    const year = asteroid.discoveryYear;
    acc.set(year, (acc.get(year) || 0) + 1);
    return acc;
}, new Map());

const maxYear = [...asteroidCountsByYear.keys()].reduce((maxYear, year) => {
    return asteroidCountsByYear.get(year) > asteroidCountsByYear.get(maxYear) ? year : maxYear;
});

return Number(maxYear);
  
  }




// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
