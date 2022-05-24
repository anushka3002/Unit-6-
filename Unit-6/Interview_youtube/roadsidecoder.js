// difference between map and for each

// const arr = [2,3,4,5,6]

// const mapResult=arr.map((e)=>{
//     return e+3
// })
// const forEachResult = arr.forEach((e,i)=>{
//    arr[i] =e+3
// })
// console.log(mapResult,forEachResult,arr)
// -----------------------------------------

// difference between null and undefined

// null is a value but undefined is when a variable is defined but not initialized

// console.log(typeof(null))
// console.log(typeof(undefined))

// -----------------------------------------

// Explain event delegation

// we can't put event listeners on every item of an
//  ecommerce website to perform some event so we
//  put event to the parent and access it in the child

// -----------------------------------------

// difference between let, var, const

// {
//     const a="hello"
// }
// console.log(a)

// const a =3 
//  a =4
// console.log(a)
// var is function scoped but let and const are block scoped
// var can be redeclared again but let and const can't be redeclared
// we can change the value of the declared variable with var and let but can't change the value of const
// -----------------------------------------


// setTimeout output

//     for(var i=0;i<3;i++){
//         function a(i){
//         setTimeout(()=>{
//             console.log(i)
//         },i*1000)
//     }
//     a(i)
// }
// -----------------------------------------

// explain call, apply and bind

// var person = {
//     name:"Anushka",
//     hello:function(thing){
//         console.log(this.name , "says hello" , thing)
//     },
// }
// var alterEgo = {
//     name:"anushka priya"
// }
// const newObj=person.hello.bind(alterEgo)
// newObj("world")
// -----------------------------------------

// explain infinite currying
// function add(a){
//     return function(b){
//         if(b) return add(a+b)
//         return a
//     }
// }
// console.log(add(5)(2)(4)(8)())
// -----------------------------------------

// function addFive(a){
//     return a+5
// }
// function substractTwo(a){
//     return a-2
// }
// function multiplyFour(a){
//     return a*4
// }

// const compose = (...functions)=>{
//     return (args)=>{
//         return functions.reduceRight((arg,fn)=>fn(arg),args)
//     }
// }

// const evaluate = compose(addFive,substractTwo,multiplyFour);
// console.log(evaluate(5))

// -----------------------------------------

function showText(text,time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(text)
        },time)
    })
}

Promise.all([
    showText("hello",1000),
    Promise.resolve("hi"),
    Promise.reject("bye"),
]).then((value)=>console.log(value));

