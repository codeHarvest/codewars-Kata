// find parity Outlier

function findOutlier(integers){
  var evenIntegers = integers.filter(num => num % 2 == 0 )
  var oddIntegers = integers.filter(num => num % 2 != 0)
  if(evenIntegers.length == 1){
	return evenIntegers[0];
}else{
	return oddIntegers[0];
}

}

findOutlier([1,3,7,8,11,41,256])

// Multiple of 3 or 5


function solution(number){
  var multiples = 0;
  
  for(var i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      multiples += i
    }
  }
  return multiples;
}


//  create phone number


function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}

//  find the odd int 


function findOdd(A) { 
  var count = 0;
  for(var i = 0; i < A.length; i++) {
    // var count = 0;
    for(var j = 0; j < A.length; j++) {
          if(A[i] == A[j]) {
            count++;
          }
    }
    if (count % 2 !== 0) {
        return A[i];
    }
  }
  count = 0;
}


// bit counting



var countBits = function(n) {
  return n.toString(2).split('').filter(n => n > 0).length;
 
};



// who likes it 


function likes(names) {
  if(names.length === 0) return "no one likes this";
  if(names.length === 1) return names[0] + " likes this";
  if(names.length === 2) return names[0] + " and " + names[1] + " like this";
  if(names.length === 3) return names[0] + ", " + names[1] + " and " + names[2] + " like this";
  return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
}


// convert string to camelcase


function toCamelCase(str){
  if (str.includes("-")) {
    return str.split("-").map(function(word){
      if(str.split("-").indexOf(word) > 0) {
        return word.charAt(0).toUpperCase()+word.slice(1);
      } else {
        return word;
      }
    }).join("");
  } else {
    return str.split("_").map(function(word){
      if(str.split("_").indexOf(word) > 0) {
        return word.charAt(0).toUpperCase()+word.slice(1);
      } else {
        return word;
      }
    }).join("");
  }
}



// Does my number look book in this 


function narcissistic(value) {
  var arr = String(value).split("").map(Number);
  return value == arr.map(val => Math.pow(val,arr.length)).reduce((acc,val) => acc + val,0)
}


//  dubstep


function songDecoder(song){
  return song.split('WUB').filter(Boolean).join(' ');
}


// find the unique number


function findUniq(arr) {
  arr.sort()
  return (arr[0] !== arr[1]) ? arr[0]: arr.pop()
  
}
