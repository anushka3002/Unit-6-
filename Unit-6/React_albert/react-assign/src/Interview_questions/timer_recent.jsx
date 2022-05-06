import React from "react"

export const Timer_recent=()=>{

const [sec,setSec]=React.useState(0)
const [min,setMin]=React.useState(0)
const [hr,setHr]=React.useState(0)
const [status,setStatus]=React.useState(false)

React.useEffect(()=>{
    var id=null
    if(sec>59){
        setMin(min+1)
        setSec(0)
    }
    if(min>59){
        setHr(hr+1)
        setMin(0)
    }
    if(status){
    id=setInterval(()=>{
        setSec((sec)=>sec+1)
    },1000)
    }
    else{
        clearInterval(id)
    }
        return (()=>clearInterval(id))
    })



    return(
        <>
        <div>
            {hr}:hr {min}:min {sec}:sec
        </div>
        <button onClick={()=>{setStatus(true)}}>Start</button>
        <button onClick={()=>{setStatus(false)}}>Pause</button>
        <button onClick={()=>{setStatus(false);setMin(0);setSec(0);setHr(0)}}>Reset</button>
        </>
    )
}