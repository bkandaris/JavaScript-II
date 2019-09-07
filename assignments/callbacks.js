// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr);
}
// Write a function to get the length of an array
const lengthOfArray = function(arr) {
  return arr.length;
}
console.log(lengthOfArray(items)); // This gets the length of whatever array we pass in as an argument

console.log(getLength(items, lengthOfArray)); // Callback function is working when we pass in the arguments



function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr);
}

// Writing a function to get the last item of an array

const lastItem = function(arr) {
  return arr[arr.length - 1];
}
console.log(lastItem(items)); // Function Works!

console.log(last(items, lastItem)); // CB function works



function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x,y);
}
// Writing our CB function to add the numbers
const add = function(x, y) {
  return x + y;
}
console.log(add(2, 3)); // Our add function is working

console.log(sumNums(5, 7, add)); // Our CB function works


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y);
}

const multNums = function(x, y) {
  return x * y;
}
console.log(multNums(3, 6)); // our function works

console.log(multNums(3, 5, multNums)); // The callback function is working

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(item, list);
}

const exists = function(item, list) {
  for(let i=0; i < list.length; i++) {
    if (list[i] === item) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(exists('Pencil', items)); // our  function works

console.log(contains('Pencil', items, exists)); // Our CB function works



/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
