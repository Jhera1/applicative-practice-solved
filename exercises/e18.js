/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */
import { maxBy, minBy } from './e17.js'
export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  let asteroidYearMap = {}
  let yearWithMostAsteroidDiscoverys = null
  let maxCount = -Infinity
  for  (let asteroid of data.asteroids) {
   asteroidYearMap[asteroid.discoveryYear] = (asteroidYearMap[asteroid.discoveryYear] + 1) || 0
  }
  for (let key in asteroidYearMap) {
    if (asteroidYearMap[key] > maxCount) {
      maxCount = asteroidYearMap[key]
      yearWithMostAsteroidDiscoverys = key
    } 
  }
  return Number(yearWithMostAsteroidDiscoverys)
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
