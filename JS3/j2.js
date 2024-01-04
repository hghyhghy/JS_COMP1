// slicing of the  arrays 

let marks_arr=[23,34,45,56]
let m1=marks_arr.slice(1,3)
console.log(m1);

// slicing with negative indexing 
let m2=marks_arr.slice(-3)
console.log(m2);

// flat method in array 

let num_arr=[[23,32],[12,21],[45]]
console.log("the original array is ",num_arr);

let B1=num_arr.flat()
console.log(B1);

let n_arr=[1,34,25,89]

let N1=n_arr.fill(88,1,3)
console.log(N1);

// wheather a particular element is present in the array or not 

function ofcheck()  {

    let a=[1,3,2,5,78]
    let a1=a.includes(2)
    console.log(a1);

}  ofcheck()
 
 function ofreverse()   {
    let a=[23,12,34,54]
    let a1=a.reverse()
    console.log(a1);

 }   ofreverse()

//   pushing element in new array

let new_array=[89,67,56,45,34]
console.log(new_array);

let temp_array=[]

new_array.forEach(function(item)  {

    temp_array.push(item)
});

  console.log(temp_array);