// Descending Order

function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }

// sum of two lowest positive integer 

function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a,b) => a - b);
    return numbers[0] + numbers[1];
  };


// Vowel Count

function getCount(str) {
    return str.replace(/[^aeiou]/gi, '').length;
  }

// Highest and lowest

function highAndLow(numbers){
    var arr = numbers.split(' ').sort(function(a, b) { return a - b });
    return arr[arr.length -1] + ' ' + arr[0];
  }


// Binary addition

function addBinary(a,b){
  return (a+b).toString(2)
}

// shortest word

function findShort(s){
  return s.split(" ").map(word => word.length).sort((a,b) => a - b)[0]
}

//