
// escape characters in string 

let str="Subham \n Sarkar"

console.log(str);
console.log(str.length);

// uppercase and lowercase operation

let s="subhamsarkar"
console.log("To uppercase", s.toUpperCase());
let s1="SHREYSOHIMAJUMDAR"
console.log("To lowercase", s1.toLowerCase());
let s2="   engineer   "
console.log("To trim ", s2.trim());

// slicing of the string 

let s3="subhamsarkar"
console.log(s3.slice(1,3));

// concatenating two string 

let s4="Shreyoshi"
console.log(s3.concat(s4));
console.log(s2.replace("e","a"));

//  charAt 

console.log(s3.charAt(0));

const prompt=require("prompt-sync")();

let fullName=prompt("Enter your full name ")

console.log(fullName);

B1=fullName.trim()
B2=fullName.length
console.log(B2);

let B3="@"

console.log("Your username will be ",B3.concat(B1,B2));

