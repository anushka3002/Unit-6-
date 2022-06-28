var arr=[1,2,3,4,6]
// filter custom function

// var newarr=arr.filter(num=>num%2===0)

// console.log(newarr)

// function filterr(arr, filterFunc) {
//     const filterArr = []; // empty array 
//     // loop though array 
//         for(let i=0;i<arr.length;i++) { 
//             const result = filterFunc(arr[i]);
//                 // push the current element if result is true 
//                 if(result) 
//                 filterArr.push(arr[i]);  
//                 }    
//                 return filterArr;
//                 }

//                 const oddArr2 = filterr(arr, num => num % 2 === 0);
//                 console.log(oddArr2); //prints [2, 4, 6]

function customFilter(arr,filterFunc){
    let filterArr=[]
    for(let i=0;i<arr.length;i++){
        let result=filterFunc(arr[i])
            if(result){
                filterArr.push(arr[i])
            }
    }
    return filterArr
}
console.log(customFilter(arr,num=>num*2))

// map custom function

// map takes an array and function as argument
// function custommap(arr, mapFunc) {
//     const mapArr = []; // empty array
//         // loop though array 
//         for(let i=0;i<arr.length;i++) {
//             const result = mapFunc(arr[i], i, arr);
//             mapArr.push(result);   
//         }   
//         return mapArr;
//     }

//     const squareArr2 = custommap(arr, num => num ** 2);
// console.log(squareArr2); // prints [1, 4, 9, 16, 25]


// function custommap(arr,mapFunc){
//     let maparr=[]
//     for(var i=0;i<arr.length;i++){
//         const result=mapFunc(arr[i])
//         maparr.push(result)
//     }
//     return maparr
// }

// const last = custommap(arr,num=>num*2)
// console.log(last)


// reduce custom function


// reduce custom function
// main working

// const sumReducer=(accumulator,current_value)=>accumulator+current_value

// const sum=arr.reduce(sumReducer)
// console.log(sum)

// const numbers = [1,2,3]

// const sumReducer = (initialValue, current) => initialValue + current;

// const reduce = (reducer, initialValue, array) => {
//   let value = initialValue;

//   for(let i = 0; i < array.length; i++) {
//     let currentValue = array[i]
//     value = reducer(value, currentValue)
//   }

//   return value;
// }

// const sumOfNumbersCustom = reduce(sumReducer, 0, numbers)

// console.log("Custom reduce function, " + sumOfNumbersCustom);

// const array=[1,3,5,2,2]
// const sumReducer=(accumulator,initialValue)=>accumulator+initialValue

// function reduce(reducer,initialValue,array){
//     let value=initialValue
//     for(var i=0;i<array.length;i++){
//         let currentValue=array[i]
//         value=reducer(value,currentValue)
//     }
//     return value
// }

// const sumOfNumbersCustom=reduce(sumReducer,0,array)
// console.log(sumOfNumbersCustom)


var array=[1,2,4,2,1]
var sumReducer=(accumulator,initialValue)=>accumulator+initialValue

function reduce(reducer,initialValue,array){
    let value=initialValue
    for(let i=0;i<array.length;i++){
        let currentValue=array[i]
        value=reducer(value,currentValue)
    }
    return value
}
const result=reduce(sumReducer,0,array)
console.log(result)