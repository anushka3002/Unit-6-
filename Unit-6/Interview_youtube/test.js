// function cont(x){
//     var y=x*10
//     function val(z){
//         console.log(x,y,z)
//     }
//     val(y*5)
// }
// cont(3)

// (function(){console.log("Hello")})

// ********************************************
// var isAuth
// console.log(isAuth)

// ********************************************

// var a="256"
// var b=256
// console.log(a===b)
// console.log(a==b)
// ********************************************

const sum=(x,y)=>{
    x=x && 5
    y=y || 5
    return x+y
}
console.log(sum(20,5))