import axios from "axios"
import { useState } from "react"

export const FetchTitle=()=>{
    const [data,setData]=useState({})
    const [number,setNumber]=useState()
   

    const handleSubmit=()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos").then((res)=>{
            setData(res.data[number])
        }).catch((err)=>{
            console.log("err",err)
        })
        console.log(data.title)
    }

    return(
        <>
        <div>
            <input type="number" placeholder="Enter the number" onChange={(e)=>setNumber(e.target.value)}></input>
            <button type="submit" onClick={()=>{
                if(number==""){
                    alert("Enter a number")
                }
                else if(number>100){
                    alert("Enter number between 1-100")
                }
                else{
                    handleSubmit()
                }
            }}>Submit</button>
            <div>
                <p>{data.title}</p>
            </div>
        </div>
        </>
    )
}