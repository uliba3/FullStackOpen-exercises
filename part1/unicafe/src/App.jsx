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

const Statistics = ({good, neutral, bad}) =>{
  const all = good + neutral + bad;
  const average = (good - bad)/all;
  const positive = 100*good/all;
  if(all > 0){
    return (
      <>
        <Display text="good" value={good}></Display>
        <Display text="neutral" value={neutral}></Display>
        <Display text="bad" value={bad}></Display>
        <Display text="all" value={all}></Display>
        <Display text="average" value={average}></Display>
        <Display text="positive" value={positive}></Display>%
      </>
    )
  }
  return (
    <div>No feedback given</div>
  )
}

const App = () => {
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
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </>
  )
}

export default App
