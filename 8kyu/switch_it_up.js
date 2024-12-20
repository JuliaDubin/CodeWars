// When provided with a number between 0-9, return it in words.

// Input: 1

// Output: "One".

// If your language supports it, try using a switch statement.


//My solution

function switchItUp(number){
    switch(number){
        case 0:
          return "Zero";
          break;
        case 1:
          return "One";
          break;
        case 2:
          return "Two";
          break;
        case 3:
          return "Three";
          break;
        case 4:
          return "Four";
          break;
        case 5:
          return "Five";
          break;
        case 6:
          return "Six";
          break;
        case 7:
          return "Seven";
          break;
        case 8:
          return "Eight";
          break;
        case 9:
          return "Nine";
          break;
    } 
  }

  //

  function switchItUp(number) {
    return number == 0 ? 'Zero' : number == 1 ? 'One' : number == 2? 'Two' : number == 3 ? 'Three' : number == 4 ? 'Four' : number == 5 ? 'Five' :
    number == 6 ? 'Six' : number == 7 ? 'Seven' : number == 8 ? 'Eight' : number == 9 ? 'Nine' : NaN;
  }
    

  //Test case:

  console.log(switchItUp(8), 'Eight')
  console.log(switchItUp(5), 'Five')

  

  //Other solutions:

  switchItUp = n =>["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]
  
  

  
