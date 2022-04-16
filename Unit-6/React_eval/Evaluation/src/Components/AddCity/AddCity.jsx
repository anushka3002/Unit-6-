import axios from "axios"
import { useState } from "react"


export const AddCity=()=>{

    const [add,setAdd]=useState({
        country:"",
        city:"",
        population:"",
    })

    const handleChange=(e)=>{
        const {id,value}=e.target
    }

    setAdd({
        ...add,
        [id]:value,
    })

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(add)
        axios.post(`http://localhost:3002/data`,add).then(()=>{
            alert("Item added")
            setAdd({
                country:"",
                city:"",
                population:"",
            })
        })
    }

    return(
        <div>
            <form id="form" onSubmit={handleSubmit}>
                <div><input type="text" placeholder="Add your city" onChange={handleChange} id="city"></input></div>
                <div><input type="Number" placeholder="Add population of your country" onChange={handleChange} id="country"></input></div>
                <div><input type="text" placeholder="Add your country" onChange={handleChange} id="population"></input></div>
                <button onClick={()=>{
                    dispatch(addData(text))
                }}>
                    Add Data
                </button>
            </form>
        </div>
    )
}