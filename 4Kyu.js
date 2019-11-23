// next bigger number with same digits 


function nextBigger(n){
  let largest = Number(n.toString().split('').sort((a, b) => b - a).join(''))
  for(let i = n + 1; i <= largest; i++) {
    if(i.toString().split('').sort().join('') === n.toString().split('').sort().join(''))
    return i
  } return -1
}



