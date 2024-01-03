
let temperature =30

if (temperature >=30 )   {

    console.log("It is a hot summer day");
}   else if (temperature>=20 && temperature<=30)  {

    console.log("It is a pleasant spring day");
} else  {

    console.log("It is a cold winter day ");
}

let number =90  

if (number >0)   {
    console.log("The number is a positive number");

}  else if (number<0)   {
    console.log("The number is a negative number ");

} else  {

    console.log("The number is zero");
}

//  if else statement inside a loop 

let array=[23,33,44,20,18]

for (let i=0;i<array.length;i++)  {

    let curr_number=array[i]

      if (curr_number%2==0)  {

        console.log({curr_number}, "is the even number " );
      }  else  {

        console.log({curr_number} ,"is the odd number " );

      }

}