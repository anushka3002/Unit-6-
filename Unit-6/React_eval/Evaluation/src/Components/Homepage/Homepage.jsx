import react from "react"
import { useStore } from "react-redux";
import "./Homepage.css";
import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
// import {Router} from "./Routers/Router/Router"


export const Homepage=()=>{

    const [data,setData]=useState([])

    useEffect(()=>{
        getData()
    },[])

    const getData=()=>{
        axios.get(`http://localhost:3002/data`).then((res)=>{
            setData(res.data)
            console.log(res.data)
        })
    }



    return(
        <div>
            <h1>City Country</h1>
            <Link to="/add-city"><h3>ADD CITY</h3></Link>
            <div>
                <button id="sorting" onClick={()=>{let arr=data.sort((a,b)=>a.population-b.population); setData([...arr])}}>Sort by asce</button>
                <button id="sorting" onClick={()=>{let arr=data.sort((a,b)=>b.population-a.population); setData([...arr])}}>Sort by desc</button>
            </div>
            <table id="table">
                <thead>
                    <tr id="row">
                        <td>Id</td>
                        <td>Country</td>
                        <td>City</td>
                        <td>Population</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                {data.map(place=>
                    <tr key={place.id}>
                        <td>{place.id}</td>
                        <td>{place.country}</td>
                        <td>{place.city}</td>
                        <td>{place.population}</td>
                        <td>
                            <button>Edit</button>
                        </td>
                        <td>
                            <button
                             onClick={()=>{
                                axios.delete(`http://localhost:3002/data/${1}`).then(res=>{
                                console.log(res.data);
                                console.log("delete done")
                                getData();
                                })
                            }}
                            >Delete</button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
   
}