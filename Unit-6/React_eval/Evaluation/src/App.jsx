import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Homepage} from "./Components/Homepage/Homepage"
import { AddCity } from './Components/AddCity/AddCity'
import {AllRouter} from "./Routers/Router"

function App() {

  return (
    <div className="App">
      {/* <Homepage/> */}
      {/* <AddCity/> */}
      <AllRouter/>
    </div>
  )
}

export default App
