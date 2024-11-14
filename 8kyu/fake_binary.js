//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. 
//Return the resulting string.
//Note: input will never be an empty string

//My solution

//splitting the string into an array of individual elements
//apply map() method to an array to replace elements with 0 and 1, and return new array
//apply join() method to combine all elements back into a string

function fakeBin(x){
    return x.split('').map(e => e < 5 ? 0 : 1).join('');
  }



