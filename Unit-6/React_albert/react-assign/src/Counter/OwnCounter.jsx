import { useState,useEffect } from "react";
import axios from "axios";

export const Counter2=()=>{

const [count,setCount] = useState(3)
const [randomUserDataJSON,setrandomUserDataJSON]=useState('')

useEffect(()=>{
    getData().then(randomData=>{
        setrandomUserDataJSON(randomData || "No user data found")
    })
},[])

const handleChange=(value)=>{
    setCount(count+value)
}

// var API = "https://randomuser.me/api"

const getData=()=>{
    return axios.get("https://randomuser.me/api").then(({data})=>{
        console.log(data)
        return JSON.stringify(data,null,2)
    }).catch(err=>{
        console.error(err)
    })
}

    return(
        <>
        <div>Counter App</div>
        <p>{count}</p>
        <button onClick={()=>{handleChange(1)}}>Add</button>
        <button onClick={()=>{handleChange(-1)}}>Subtract</button>
        <button onClick={()=>{handleChange(count*1)}}>Double</button>
        {/* <button onClick={()=>{getData()}}>Get data</button> */}

        <p>{randomUserDataJSON}</p>
        </>
    )
}