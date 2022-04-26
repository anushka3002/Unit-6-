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
    // "availability":"",
    // "rating":""
})

const handleChange=(e)=>{
    setPet({...pet,[e.target.className]:e.target.value})
}

const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:8080/pets",pet).then(()=>{
        alert("Added data successfully")
        setPet({
            "name":"",
            "city":"",
            "address":"",
            "capacity":"",
            "cost_per_day":"",
            // "availability":"",
            // "rating":""
        })
        
    })
}

const [value, setValue] = React.useState(2);
// sprint 2 > evaluation


    return (

    <>
    <div id="information">
        <form onSubmit={handleSubmit}>
            <h3>Fill the information</h3>
            <input className="name" id="input" type="text" value={pet.name} onChange={handleChange} placeholder="Enter name"></input>
            <input className="city" id="input" type="text" value={pet.city} onChange={handleChange} placeholder="Enter city"/>
            <input className="address" id="input" type="text" value={pet.address} onChange={handleChange} placeholder="Enter address"/>
            <input className="capacity" id="input" type="text" value={pet.capacity} onChange={handleChange} placeholder="Enter capacity"/>
            <input className="cost_per_day" id="input" type="text" value={pet.cost_per_day} onChange={handleChange} placeholder="Enter cost"/>
            {/* <div id="available_rating">
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
    </Box>   */}
    {/* </div>  */}
    {/* </div> */}
    <input id="submitForm" className="submitBtn" type="submit" />
        </form>
    </div>
    </>
    )
}


