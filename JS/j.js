
// declaring objects

const student={

    full_name:"Subham Sarkar",

    age:20,

    cgpa:8,

    isPass:true
};

console.log(student);

console.log(typeof student);

// accessing each element from student 

console.log(student["full_name"]);

// accessing  the age 

console.log(student.age);

// increasing the value of age

student.age=student.age + 1

console.log(student.age);

// changing the name of the object 

        student.full_name="Shreyoshi Majumdar"

        console.log(student.full_name);

//    creating another  onject of product 

  const my_product={

    title:"Ball Pen",

    rating:4,

    isOnOffer:true,

    price:340

  };

  console.log(my_product);

  console.log(typeof my_product);

  console.log(typeof my_product.isOnOffer);

  console.log(typeof my_product.price);
