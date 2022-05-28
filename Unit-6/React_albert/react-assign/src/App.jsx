import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import {Counter} from "./Counter/Counter"
import {Todo} from "./Counter/Todo"
import { Counter2 } from './Counter/OwnCounter'
import {Hello} from "./Counter/hello"
// import { Timer } from './Counter/Timer'
import { Perfect_timer } from './Counter/Perfect_timer'
import { FetchTitle } from './fetch/fetchTitle'
import { InfiniteScrolling } from './Assignment/InfiniteScrolling'
import { Timer_recent } from './Interview_questions/timer_recent'
import {Timer} from './Interview_questions/timer'

import { Practice_timer } from './Interview_questions/Practice_timer'
import { Fetch_practice } from './fetch/fetch_practice'
import { Debouncing } from './Interview_questions/debouncing_anu'



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
      {/* <Fetch_practice/> */}
      {/* <InfiniteScrolling/> */}
      {/* <Timer_recent/> */}
      {/* <GamesPage/> */}
      {/* <Practice_timer/> */}
      <Debouncing/>
    </div>
  )
}

export default App
