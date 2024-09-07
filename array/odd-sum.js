// function takes array  as a parameter,give me the average number of the odd number 
const oddArray=[]
let average=0
function Odd(array){
  for( const loop of array){
    if(loop%2==1){
      oddArray.push(loop)
    }
  }
  return oddArray
}
function averageOdd(oddArray){
  for(const loop of oddArray){
     average +=loop
  }
  return average

}
const array =[2.4,5,7,77,556,43,12,45,6]
Odd(array)
averageOdd(oddArray)
console.log(oddArray);
console.log(average/2)
