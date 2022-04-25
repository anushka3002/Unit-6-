import "./listing.css"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"


export const Listing=()=>{

const [pet,setPet]=useState({
    "name":"",
    "city":"",
    "address":"",
    "capacity":"",
    "cost_per_day":"",
    "availability":"",
    "rating":""
})

useEffect(()=>{
    getData()
},[])

const getData=()=>{
    axios.get("http://localhost:8080/pets").then((res)=>{
        setPet([...res.pet])
        console.log(res.pet)
    })
}

const handleSubmit=(e)=>{
    axios.post("http://localhost:8080/pets",pet).then((res)=>{
        alert("Added data successfully")
        setPet({
            "name":"",
            "city":"",
            "address":"",
            "capacity":"",
            "cost_per_day":"",
            "availability":"",
            "rating":""
        })
        
    })
}
// sprint 2 > evaluation


    return (

    <>
    <table id="customers">
        <thead>
            <tr>
            <td>Id</td>
            <td>Name</td>
            <td>City</td>
            <td>Address</td>
            <td>Capacity</td>
            <td>Cost per day</td>
            <td>Verified</td>
            <td>Rating</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                
            </tr>
        </tbody>
    </table>

    </>
    )
}