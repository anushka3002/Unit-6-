import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Counter} from "./Counter/Counter"
import {Todo} from "./Counter/Todo"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Counter title="Counter for my app"/> */}
      <Todo/>
    </div>
  )
}

export default App
