function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers = {};
  for (const number of array) {
    //n steps
    const complement = target - number;
    if (seenNumbers[complement]) return true 
    seenNumbers[number] = true
    //   return true;
    // } else {
    //    seenNumbers[number] = true
    } 
    return false
  }
 

// Previous Solution
// for (let i = 0; i < array.length; i++){
//   //n steps
//   const complement = target - array[i]
//   for (let j = i + 1; j < array.length; j++) {
//     // n * n steps
//     if (array[j] === complement) {
//       return true
//     }
//   }
// }
// }
// return false; //if I reach the end of the array, return false

/* 
  Write the Big O time complexity of your function here
  Current Solution: 
  Runtime: 0(n)
  
  Previous Solution: 
  Runtime: 0(n^2) => not ideal
  Space: 0(n)
*/

/* 
  Add your pseudocode here


  Create an object to keep track of numbers we've already seen
   iterate through each number in the array 
    for the current num, identify a complement that adds to the target(comp = target - num)
    check if any key on our object is the complement 
      if so, return true 
      otherwise, add that number to the object 


  iterate through each number in the array 
    for the current num, identify a complement that adds to the target(comp = target - num)
    iterate through the rest of the array 
      check if any number is our complement
      is so,return true 

      if I reach the end of the array, return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));
}

module.exports = hasTargetSum;