

// arrays in js 

let marks=[23,67,89,98,78,87]
console.log(marks);
console.log(marks.length);

// arrays of string 

let name=["subham","shreyoshi","shrestha","santunu"]
console.log(name);
console.log(name.length,typeof name);

// array indices 

console.log("The first element ", name[0]);
console.log("The second element ", name[1]);

console.log("Changing value", name[2]="shreya",name);

// iterating over array 

B1=marks.length

for (let i=0; i<marks.length; i+=1)  {
    console.log(marks[i]);
}

// using for of 

for (let mark of marks) { console.log(mark);

}
for (let n of  name)   { console.log(n.toUpperCase());

}

// total of marks

let sum=0
for (let temp of marks)   {
    sum += temp
}
console.log(sum);
console.log("Averge of the number will be ");
let avg=sum/marks.length
console.log(avg);