import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { CityTable } from "../StoringData/citytable";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCity } from "../../Redux/action";
import "./Homepage.css"

export const Homepage = () => {
  const [city, addCity] = useState([]);
  useEffect(() => 
    getData(), 
  []);

  const dispatch = useDispatch();
  const cities = useSelector((store) => store.city);

  const getData = () => {
    axios.get(`http://localhost:3002/city`).then((res) => {
      let final = dispatch(addCity(res.data));
      addCity([...final.payload]);
    });
  };

  const deleteCity=(id)=>{
    axios.delete(`http://localhost:3002/city/${id}`).then(() => getData());
  }

  return (
    <>
    <h1>Country City</h1>
      <div className="subDiv">
        
        <div>
          <Link to={`/add-country`}>Add Country</Link>
          <br/>
          <Link to={`/add-city`}>Add City</Link>
        </div>
        <div>
        <br />
        <div>
          <button id="sorting" onClick={()=>{let arr=city.sort((a,b)=>b.population-a.population); addCity([...arr])}}>
            Population High to low
          </button>
          <button id="sorting" onClick={()=>{let arr=city.sort((a,b)=>a.population-b.population); addCity([...arr])}}>
            Population Low to high
          </button>
        </div>
        <br />
        </div>
        <br/>
        <table id="table">
          <tr id="row">
            <th>id</th>
            <th>Country</th>
            <th>City</th>
            <th>Population</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {city.map((el) => (
            <CityTable key={el.id} deleteCity={deleteCity} data={el} />
          ))}
        </table>
      </div>
    </>
  );
};