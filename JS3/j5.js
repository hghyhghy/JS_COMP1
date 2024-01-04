

//  creating some objects 

let obj ={ 
    int_prop:5,
    str_prop:"Subham",
    obj_prop: new Date(),
    inner_obj : {
          
        inner_prop:6,
    },

    function_prop: function ()  {

        console.log("Welcome to my Github");
    }
};

console.log(obj.int_prop);
console.log(obj.str_prop);
console.log(obj.obj_prop.toLocaleDateString());
console.log(obj.inner_obj.inner_prop);
obj.function_prop();

//  define function implicitely 

function togreet()  {
    console.log("Hello there");
}

 let create=  {

    greet:togreet,    
    //  defining using func name  implicitely

    bywhom: function ()  {
        console.log("Its Subham Sarkar Here ");
    }

 };

 create.greet()
 create.bywhom()


const num = function myfunc(g1,g2) {
    return g1/g2
}

console.log(num(8,2));

const calculate = function mycalculation ( num1, num2)  {
    return num1 + num2
}

console.log(calculate(5,5));

//  squaring of two numbers using functions

const square = function ofsquare (number) {

    return number*number
} 
console.log(square(5));