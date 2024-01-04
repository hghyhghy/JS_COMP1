
let array =[2,4,56,78,89]

function  finding_index(element) {
    return element > 25
    
}

console.log( array.findIndex(finding_index));

let a1=[20,25,30,45,55]
let found = a1. find (function (i)   {
    return i > 25
});

console.log(found);

// for in loops 
//  creating an object 

let student  = {
    name:"Subham Sarkar",
    class:12,
    sectin:"A",
    Roll:3,
    Remarks:"Good"
};

let temp= ''

for (let item in student)  {
    temp += student[item] + " "; 
}
console.log(temp);

let num_array=[12,23,34,45,56]
console.log("The created array is ", num_array);

for (let val of num_array)  {
    console.log(val);
}

let str="subhamsarkar"
for (let j of str)   { console.log(j);

}