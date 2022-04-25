import "./fillData.css"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export const FillData=()=>{

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

const [value, setValue] = React.useState(2);
// sprint 2 > evaluation


    return (

    <>
    <div id="information">
        <form>
            <h3>Fill the information</h3>
            <input id="input" type="text" placeholder="Enter name"></input>
            <input id="input" type="text" placeholder="Enter city"/>
            <input id="input" type="text" placeholder="Enter address"/>
            <input id="input" type="text" placeholder="Enter capacity"/>
            <input id="input" type="text" placeholder="Enter cost"/>
            <div id="available_rating">
                <div>
            <p id="availability">Availability</p>
            <div id="checkbox"><label id="availability">Yes</label><input type="checkbox"/>
            <label id="availability">No</label><input style={{marginLeft:"-10%"}} type="checkbox"/></div>
            </div>
            <div>
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Choose Rating</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>  
    </div> 
    </div>
    <button id="submitForm">Submit</button>
        </form>
    </div>
    </>
    )
}



