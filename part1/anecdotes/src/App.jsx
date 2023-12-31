import { useState } from 'react'
import './App.css'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(8).fill(0));
  const [biggestValue, setBiggestValue] = useState(0);
  const [biggestPosition, setBiggestPosition] = useState(0);

  const selectRandom = () => {
    setSelected(Math.floor(Math.random() * 8));
  }
  const vote = () => {
    const copy = [...points];
    copy[selected]++;
    setPoints(copy);
    const v = Math.max(...copy);
    const i = copy.indexOf(v);
    setBiggestValue(v);
    setBiggestPosition(i);
  }
  console.log("biggestValue", biggestValue);
  console.log("biggestPosition", biggestPosition);

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>
      <button onClick={vote}>vote</button>
      <button onClick={selectRandom}>next anecdotes</button>
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[biggestPosition]}</div>
      <div>has {points[biggestPosition]} votes</div>
    </>
  )
}

export default App