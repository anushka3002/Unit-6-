import React from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from "axios"


function App() {

  const [data,setData] = React.useState([]);
  const [status,setStatus] = React.useState(true)

  const input = React.useRef();
  var text;

  React.useEffect(()=>{
      getData();
  },[])

  const getData=()=>{
      text = input.current.value;
      axios.get(`https://codejudge-question-artifacts-dev.s3.amazonaws.com/q-1709/data.json`).then((res)=>{
          if(text==""){
              setData(res.data)
          }
          else{
              const newData = res.data.filter((e)=>{
                  return e.name.toLowerCase()==text.toLowerCase()
              })
              setData(newData)
              setStatus(false)
          }}).catch((error)=>{
          console.log(error)
      })
  }

  const handleChange=()=>{
      text = input.current.value;
      if(text==""){
          getData()
      }
  }

  console.log("hello",data)


  return(
      <div id="cont">
          <h1>COUNTRIES</h1>
          <input className= "search-input" type="text" ref={input} onChange = {()=>handleChange()} />
          <button className= "search-button" onClick={()=>{getData()}}>Submit</button>
          <div id="flags">
              {
                  data.length==0 && status==false ? (<p>No country found!</p>) : (
                          data.map((e,index)=>{
                              return <div key={index} className={`country-list-${index}`} id="card">
                                  <img src={e.flag} style={{width:"100%"}}/>
                                  <p>{e.name}</p>
                                  <p>Population : {e.population}</p>
                                  <p>Region : {e.region}</p>
                                  <p>Capital : {e.capital}</p>
                              </div>
                              
                          })
                      )
              }
          </div>
      </div>
  )
}

export default App;
