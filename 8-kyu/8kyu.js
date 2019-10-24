// Reversed Strings

// Kata.solution("world") //returns "dlrow"

function reverseString(str){
   return str.split("").reverse().join("");
}

// Remove First and Last Character

function removeChar(str){
    var arr = str.split("");
    arr.shift();
    arr.pop();
    return arr;
   };

removeChar("country");

// Remove String Spaces

function noSpace(x){
    return x.replace(/ /g, '');
}

//  Convert String to a Number!

var stringToNumber = function(str){
    // put your code here
    return Number(str);
  }

// Even or odd

function even_or_odd(number) {
    if (number%2 == 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }

// same problem in 7 kyu Even or odd 

function oddOrEven(array) {
    return array.reduce((acc,intVal) => acc + intVal,0) % 2 == 0 ? 'even' : 'odd'
}

// Sum Mixed array 

function sumMix(x) {
    return x.reduce((s, n) => s + Number(n), 0)
  }

// A needle in the Haystack

function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
  }

// Abbreviate a Two Word Name 

const abbrevName = (name) => {
    return name.split(" ").map(name => name[0].toUpperCase()).join(".");
  };

// Convert boolean values to strings 'yes' or 'no';

function boolToWord( bool ){
    return bool === true ? 'Yes':'No';
  }