
// changing  arrays to string using function

function func() {

    let str=["subham","shreyoshi","shreya","sri","Rai"]
    let B1=str.toString()
    console.log(B1);
}

func()

function join()  {
    let a=[1,2,4,5,3,6,7]
    let B=a.join("|")
    console.log(B);
}
join()

//  creating an object 

let emp= {
    name:"Subham Sarkar",role:"Assistant SDE",
    salary:80000
}
console.log(delete emp.salary);
console.log(emp);
// concatenation of two strings 

function conacat()  {

    let num1=[10,12,11],
        num2=[13,14,15],
        num3=[23,21,20]

    console.log(num1.concat(num2,num3));
}

  conacat()

// the unshift method is used to add elements at  the beginning of the array 

let number=[12,23,34,45,56]
console.log("The original array is ",number);
number.unshift(90,98)
console.log("The original array is ",number);
console.log(number.pop(56),number);
