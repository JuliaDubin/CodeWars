//You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
//
//Array can contain numbers or strings. X can be either.
//
//Return true if the array contains the value, false if not.


//Solution
//Returns True if Array 'a' contains value 'x', otherwise returns False

function contains(a, x) {
    return a.includes(x);
  }

//Test case

  console.log(contains([1, 2, 3], 2));  // Output: true
  console.log(contains([1, 2, 3], 4));  // Output: false
  console.log(contains(['apple', 'banana', 'cherry'], 'banana'));  // Output: true
  console.log(contains(['apple', 'banana', 'cherry'], 'grape')); //false