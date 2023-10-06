import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Display = (props) => (
  <div>{props.text}{props.value}</div>
)

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>give feedback</h1>
      <div>
        <Button handleClick={()=>setGood(good+1)} text="good"></Button>
        <Button handleClick={()=>setNeutral(neutral+1)} text="neutral"></Button>
        <Button handleClick={()=>setBad(bad+1)} text="bad"></Button>
      </div>
      <h1>statistics</h1>
      <Display text="good" value={good}></Display>
      <Display text="neutral" value={neutral}></Display>
      <Display text="bad" value={bad}></Display>
    </>
  )
}

export default App
