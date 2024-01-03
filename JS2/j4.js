

//  for in loop 

//  creating an object 


let student = {
    
    name:"Subham sarkar",
    age:20,
    cgpa:8.5,
    isPass:true
}

for (let i in student)  {
    console.log("Key =",i,"Value=",student[i]);
}

const  prompt=require('prompt-sync')();

let gameNumber = 25
let guessNumber=prompt("Guess the number");

while(guessNumber != gameNumber)  {  

guessNumber=prompt("Please re-enter your number")

}

console.log("congrats you guess the right number ");

// creating string in js 

let str="subhamsarkar"

console.log(str[8]);

// string using template literal 

let specialstring=`This is template literal`

console.log(specialstring);

// use of template literals

let obj={

    item:"pen",
    price:10,
    color:"Blue",
};

let ot=`The price of the item ${obj.item} is ${obj.price} rupees and its color is ${obj.color}`

console.log(ot);