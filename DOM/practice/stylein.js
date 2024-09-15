// all section ciustomize
const section = document.querySelectorAll("section");
for (const loop of section) {
  loop.style.border = "2px solid black";
  loop.style.margin = "10px";
  loop.style.borderRadius = "14px";
}

// change the background color of section2
const customize1 = document.getElementById("section2");
customize1.style.backgroundColor = "red";
console.log(customize1.innerHTML);

// fruit class inner text print
const fruit = document.getElementsByClassName("fruit");
for (const loop of fruit) {
  console.log(loop.innerText);
}

// specific one id style
const book1= document.getElementById('book1')
book1.style.color="orange"
console.log(`book 1 number is ${book1.innerText}`)

// console section1 structure, change the background color , change some style also
const section1=document.getElementById('section1')
console.log(section1.innerHTML)
section1.style.backgroundColor="purple"