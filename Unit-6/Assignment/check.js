// {
//     var a =20;
//     var b =10;
//     console.log(a+b);
// }
// console.log(a)


// INFINITE CURRYING
// function multiply(a){
//     return function(b){
//         if(b){
//             return multiply(a+b)
//         }
//         else{
//             return a
//         }
//     }
// }
// console.log(multiply(1)(2)(3)())


// NORMAL CURRYING
// function multiply(a){
//     return function(b){
//         return function (c){
//             return function(d){
//                 return a*b*c*d
//             }
//         }
//     }
// }
// console.log(multiply(1)(2)(3)(4))

// NORMAL FUNCTION
// function add(a,b,c,d){
//     return a+b+c+d
// }
// console.log(add(5,6,7,8))


// SELF INVOKE FUNCTION
// (function add(){
//     var x =5;
//     var y=10;
//     console.log(x+y)
// })()

// CLOSURE
// function x(){
//     var a = 10;
//     return function(){
//         console.log(a)
//     }
// }
// var abc = x();
// abc();



// SETTIMEOUT with var
// function display(index){
//     setTimeout(()=>{
//         console.log(index)
//     },1000)
// }

// for(let i=0;i<3;i++){ 
//     display(i)
// }


// FLATTEN ARRAY
// var arr = [                             //OUTPUT [1,2,3,4,5,6,7,8,9,10]
//     [1,2],[3,4],
//     [5,6,7], [8,[9,10]]
// ]

// console.log([].concat(...arr))
// console.log(arr.flat(2))

// function findflat(arr){   
//     let result =[];
//     arr.forEach((e)=>{
//         if(Array.isArray(e)){
//             result.push(...findflat(e))
//         }
//         else{
//             result.push(e)
//         }
//     })
//     return result
// }
// console.log(findflat(arr))

// function flatArray(arr){
//     let result=[]
//     arr.forEach((e) => {
//         if(Array.isArray(e)){
//             result.push(...flatArray(e))
//         }
//         else{
//             result.push(e)
//         }
//     })
//     return result
// }
// console.log(flatArray(arr))