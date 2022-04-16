import { Route,Routes } from "react-router";
// import { Router } from "react-router-dom";
import { AddCity } from "../Components/AddCity/AddCity";
import { Homepage } from "../Components/Homepage/Homepage";

export const AllRouter=()=>{
    return(
    <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route exact path="/add-city" element={<AddCity/>}/>
    </Routes>
    )
}