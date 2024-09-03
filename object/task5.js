// Loop through an object and print the key-value pairs with their types

// Input:

let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};
for(let key in myObject){
  let properties=key;
  let properties_type=typeof myObject[key];
 console.log(`key: ${properties} || Type: ${properties_type}`)
}
// output:
// key: name || Type: string
// key: age || Type: number
// key: city || Type: string
// key: isStudent || Type: boolean