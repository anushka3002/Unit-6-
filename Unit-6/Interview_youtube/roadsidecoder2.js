// what is hoisting
// hoisting refers to the process whereby the interpreter apperars to move declaration of funcitons, variables and classes on the top of their scope , prior to the execution of code. 
// function abc(){
//     console.log(a,b,c)
//     var a=20
//     const c=20
//     let b=33
// }
// abc()
// here b and c are in temporal dead zone: A zone is a state where variables are in the scope but they are not yet declared

// ***********************************************************************************************************************

// Implicit and explicit binding

var obj={
    name:"Anushka",
    display:function(){
        console.log(this.name);
    },
}

var obj1={
    name:"ABC"
};

obj.display.call(obj1)