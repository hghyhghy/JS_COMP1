
//  prompt in js 

const prompt= require('prompt-sync')();

let num=prompt("Enter a number ");

if (num%5===0) {

    console.log({num},"Is multiplied by 5");
} else {

    console.log({num},"Is not multiplied by 5");

}

let marks=prompt("Enter your marks :")

let grade;

if (marks>=90 && marks<=100)  {
    grade="A"
}  else if (marks>=70 && marks<=89)  {
    grade="B"
}  else if(marks>=60 && marks<=69)  {
    grade="C"
}  else if(marks>=50 && marks<=59)  {
    grade="D"
}  else if (marks>=0 && marks<=49)   {
    grade="F"
} 

   console.log("According to your result, your grade was", grade);


// loops in js 

for (let count=0; count<5 ; count++) {

    console.log("Subham love Shreyoshi");
}
