import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import {Counter} from "./Counter/Counter"
import {Todo} from "./Counter/Todo"
import { Counter2 } from './Counter/OwnCounter'
import {Hello} from "./Counter/hello"
import { Timer } from './Counter/Timer'
import { Perfect_timer } from './Counter/Perfect_timer'
import { FetchTitle } from './fetch/fetchTitle'
import { InfiniteScrolling } from './Assignment/InfiniteScrolling'
import { Timer_recent } from './Interview_questions/timer_recent'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Counter title="Counter for my app"/> */}
      {/* <Counter2/> */}
      {/* <Hello/> */}
      {/* <Timer/> */}
      {/* <Todo/> */}
      {/* <Perfect_timer/> */}
      {/* <FetchTitle/> */}
      {/* <InfiniteScrolling/> */}
      <Timer_recent/>
    </div>
  )
}

export default App
