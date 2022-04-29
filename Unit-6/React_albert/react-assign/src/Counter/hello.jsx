// import logo from './logo.svg';
import {useState} from "react"
// import './App.css';

export const Hello=() =>{
 let [counter,setCounter]=useState(0);
 const handleChange=(value)=>{
    setCounter(counter+value)
 }
 return(
  <>
     <h3>Counter: {counter}:{counter}:{counter}</h3>
     <button
     onClick={()=>{
       handleChange(1)
     }}>Add 1</button>
     <button
     onClick={()=>{
       if(counter>=1){
        handleChange(-1)
       }
       }}>Remove 1</button>
       <button
     onClick={()=>{
       if(counter>=1){
        handleChange(counter*1)
       }
       }}>Double</button>
   </>
 )
}


