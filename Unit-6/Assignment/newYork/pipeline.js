// function compose(funcs){
//     let res=null;
//     return function composed(val){
//         for(let i=0;i<funcs.length;i++){
//             if(i==funcs.length-1){
//                 return res
//             }
//             else{
//                 if(res==null){
//                     res=funcs[i](val)
                    
//                 }
//                 else{
//                     res=funcs[i](res)
//                 }
//                 // console.log(res)
//             }
//         }
//     }
// }

function compose(funcs){
    let res=null
    return function composed(val){
        for(let i=0;i<funcs.length;i++){
            if(i==funcs.length-1){
                return res
            }
            else{
                if(res==null){
                    res=funcs[i](val)
                }
                else{
                    res=funcs[i](res)
                }
            }
        }
    }
}


const pipeline=[
    (num)=>num-1,
    (num)=num*10,
    (num)=`${num} as a string`
]

const composedm= compose(pipeline)
console.log(composedm(4))

