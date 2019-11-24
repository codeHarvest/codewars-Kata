// moving zeros to the end


var moveZeros = function (arr) {
// filter for zeros
var arrofzeros = arr.filter(num => num === 0);
// filter numbers
var arrWithoutZeros = arr.filter(num => num !== 0);
// join array and resulting zeros array
return arrWithoutZeros.concat(arrofzeros)

}

