import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Tick } from './Components/Tick'
import { Flags } from './Components/flags'
import { CounterRedux } from './Components/CounterRedux'

function App() {
  return (

    <div className="App">
      {/* <Flags/> */}
      <CounterRedux/>
    </div>
  )
}

export default App
