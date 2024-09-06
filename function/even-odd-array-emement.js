const even=[];
const odd=[];
function isEven(array){
  for(const loop  of array){
    if(loop %2 ==0){
      even.push(loop)
    }
  }
  return even
} 
function isOdd(array){
  for(const loop  of array){
    if(loop %2 ==1){
      odd.push(loop)
    }
  }
  return odd
} 
const roll=[1,2,13,24,53,6,7,8,9,10.11,12,13,14,15,21]
console.log(`even numbers: ${ isEven(roll)}`);   
console.log(`odd numbers: ${isOdd(roll)}`) 