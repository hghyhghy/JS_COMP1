
// if else statement 

let mode="dark"

let color;

if (mode ==="dark") {

    color="Black"

} else {

    color="White"
}  

console.log(color);

let age=16

if (age>=18)  {

    console.log("Can vote ");

} else  {

   console.log("Can not vote ");
}

//  odd even check 

let userInput = 8


if (userInput % 2 === 0)  {

    console.log( "The number is even");

}   else  {

    console.log("The number is odd");
}

//  the else if statement 

let age1=24

if (age<=18)  {

    console.log("He/she is a junior ")


} else if (age>=60)  {
    
    console.log("He/she is a senior ")


} else   {

    console.log("He/she is a middle aged person ")

}

 if (mode==="dark")  {console.log(mode);}


//  ternary operator 

let age2=20

let result= age2 >= 18 ?"He is an adult":"He is not an adult";

console.log(result);

//  making it another way 

let age3=67

age3>=18 ? console.log("He is an adult"): console.log("He is not an adult");

