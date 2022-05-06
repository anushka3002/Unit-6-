import { useState } from "react"
import { ButtonComponent } from "../Components/ButtonComponent"
import { DisplayComponent } from "../Components/DisplayComponent"
import "./Perfect_timer.css"
export const Perfect_timer=()=>{
    const [time,setTime]=useState({ms:0, s:0, m:0, h:0})
    const [interv,setInterv]=useState()
    const [status,setStatus]=useState(0)
    
    const start=()=>{
        run();
        setStatus(1);
        setInterv(setInterval(run,10))
    }
    
    var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;
    const run=()=>{
        if(updatedM===60){
            updatedH++;f 
            updatedM=0;
        }
        if(updatedS===60){
            updatedM++;
            updatedS=0;
        }
        if(updatedMs===100){
            updatedS++;
            updatedMs=0;
        }
        updatedMs++
        return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH})
    }

        const stop=()=>{
            clearInterval(interv)
            setStatus(2)
        }

        const reset=()=>{
            clearInterval(interv)
            setStatus(0)
            setTime({ms:0, s:0, m:0, h:0})
        }

        const resume=()=>start()
            
        

    return(
        <>
        <div className="main-section">
            <div className="clock-holder">
                <div className="stopwatch">
                    <DisplayComponent time={time}/>
                    <ButtonComponent resume={resume} reset={reset} status={status} stop={stop} start={start}/>
                </div>
            </div>
        </div>
        
        </>
    )
}