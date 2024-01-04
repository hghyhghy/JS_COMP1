
// initializing array using new keyword 


let arr1=new Array (3,19,23,56)

console.log(arr1);
let arr2= new Array(3)
arr2[0]=23
arr2[1]=33
arr2[2]=43

console.log(arr2);

// accessing array elements

const courses=["HTML","CSS","REACT","JS"]
console.log(courses[0]);
console.log(courses[1]);
console.log(courses[2]);
console.log(courses[3]);
//  changing elements 
console.log(courses[1]="Next.js",courses);

// converting array to  string 
console.log(courses.toString());

// decrease the length of the array 
courses.length=2
console.log(courses);

for (let j=0; j<courses.length ; j++)  {
    console.log(courses[j]);
}

courses.push("Node.Js")
console.log(courses);

console.log("Is this is the array ",courses instanceof Array);

// length of the array using function 


function array()       {
    let marks=[10,11,13,14,15]
    console.log(marks.length);
}

array()