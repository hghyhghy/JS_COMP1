

let old_array=[12,2,4,45,6]
console.log(old_array);

let new_array=old_array.filter(function(element)  {
    return element%2==0;
});

console.log(new_array);

// function to find the value which is greater than 4

let a=[2,4,3,1,0,55,66]

let findelement=a.find( function (i)  {
    return i > 4;
});

console.log(findelement);

//  the every method in js 

  let some=[1,2,3,4,5]

  let numbergreaterthanzero= some.every( function ( k ) {

    return k>0
  });
  
  console.log(numbergreaterthanzero);

//  js map method 

let array=[1,2,3,4,5]
console.log(array);

let array1= array.map ( function (j) {
    return j*5
});

console.log(array1);

const items=[1,29,47]
const empty=[]

items.forEach( function (item)  {
  return empty.push(item*item)
});

console.log(empty);
