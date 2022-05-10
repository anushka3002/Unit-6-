import axios from "axios"
import React from "react"
import "./flags.css"

export const Flags=()=>{

const [data,setData]=React.useState([])
const [status,setStatus]=React.useState(true)


const input=React.useRef();
var text;

React.useEffect(()=>{
    getData()
},[])

const getData=()=>{
    text=input.current.value;
    axios.get("https://codejudge-question-artifacts-dev.s3.amazonaws.com/q-1709/data.json").then((res)=>{
        if(text==""){
            setData(res.data)
        }
        else{
            const newData = res.data.filter((e)=>{
                return e.name.toLowerCase()==text.toLowerCase()
            })
            setData(newData)
            setStatus(false)
        }
    }).catch((err)=>{
        console.log(err)
    })
}

const handleChange=()=>{
    text=input.current.value;
    if(text==""){
        getData()
    }
}

    return(
        <>
        <div>
            <h2>Country</h2>
        <input type="text" ref={input} onChange={()=>handleChange()}></input>
        <button onClick={()=>{getData()}}>Submit</button>
        </div>
        <div id="flags">
            {
                data.length==0 && status==false?(<p>No country found!</p>):(
                data.map((e,index)=>{
                    return <div key={index} id="card">
                        <img src={e.flag}></img>
                        <p>{e.name}</p>
                        <p>Population: {e.population}</p>
                        <p>Region: {e.region}</p>
                        <p>Capital: {e.capital}</p>
                    </div>
                })
            )
            }
        </div>
        </>
    )
}