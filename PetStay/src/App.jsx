import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { AllRoutes } from "./routes/routes"
import { Homepage } from './components/home/home'
import {Listing} from './components/listing/listing'
import PrimarySearchAppBar from "./components/Navbar/navbar"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <AllRoutes/> */}
    {/* <Homepage/> */}
    {/* <Listing/> */}
    <PrimarySearchAppBar/>
    </>
  )
}

export default App
