import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import {Counter} from "./Counter/Counter"
import {Todo} from "./Counter/Todo"
import { Counter2 } from './Counter/OwnCounter'
import {Hello} from "./Counter/hello"
import { Timer } from './Counter/Timer'
import { Perfect_timer } from './Counter/Perfect_timer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Counter title="Counter for my app"/> */}
      {/* <Counter2/> */}
      {/* <Hello/> */}
      {/* <Timer/> */}
      {/* <Todo/> */}
      <Perfect_timer/>
    </div>
  )
}

export default App
