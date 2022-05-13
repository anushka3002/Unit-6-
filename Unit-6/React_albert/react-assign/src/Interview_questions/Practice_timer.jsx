import { useEffect } from "react";
import { useState } from "react";

export const Practice_timer=()=>{

    const [sec,setSec] = useState(0)
    const [min,setMin] = useState(0)
    const [hr,setHr] = useState(0)
    const [status,setStatus] = useState(false)
    const [change,setChange] = useState(false)

    useEffect(()=>{
        let id=null
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
        return(()=>clearInterval(id))
    })
    

    return(
        <>
        <div>
        {hr}:Hr {min}:Min {sec}:Sec
        </div>
        {change===false?
        (<button onClick={()=>{setStatus(true);setChange(true)}}>Start</button>):
        (<button onClick={()=>{setStatus(true);setChange(false)}}>Resume</button>)
        }
        <button onClick={()=>{setStatus(false)}}>Stop</button>
        
        
        <button onClick={()=>{setStatus(false);setSec(0);setMin(0);setHr(0)}}>Reset</button>
        </>
    )
}