import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {AllRouters} from "./Routers/Router"

function App() {

  return (
    <div className="App">
      {/* <Homepage/> */}
      {/* <AddCity/> */}
      <AllRouters/>
    </div>
  )
}

export default App
