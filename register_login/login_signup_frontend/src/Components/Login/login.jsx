import React from "react" 
import { useState } from "react"
import "./login.css"
import axios from "axios"
import { Link } from "react-router-dom"

export const Login=()=>{

    const [user, setUser] = useState({
        email:"",
        password:"",
    })

    const handleChange=e=>{
        const {name,value}=e.target
        setUser({
            ...user,
            [name]:value
        })
    }

const login=()=>{
    axios.post("http://localhost:9002/login",user)
    .then(res=>console.log(res))
    alert("Logged in Successfully")
}

    return(
        <>
        <div className="login">
            {console.log("LoginUser",user)}
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} placeholder="Enter your email" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Enter your password" onChange={handleChange}></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button">Register</div>
        </div>
        </>
    )
}