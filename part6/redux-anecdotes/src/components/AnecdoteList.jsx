import { useDispatch, useSelector } from "react-redux"
import { addVote } from "../reducers/anecdoteReducer"
import { newVote, clearNotification } from "../reducers/notificationReducer"

const AnecdoteList = () => {
    const anecdotes = useSelector(state => {
      const filter = state.filter.toLowerCase();
      const unsortedAnecdotes = state.anecdotes;
      console.log('filter, unsortedAnecdotes', filter, unsortedAnecdotes)

      // Filter anecdotes based on state.filter
      const filteredAnecdotes = unsortedAnecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter));

      // Sort the filtered anecdotes by the number of votes in descending order
      const sortedAnecdotes = filteredAnecdotes.slice().sort((a, b) => b.votes - a.votes);

      return sortedAnecdotes;
    })
  
    const dispatch = useDispatch()
    const vote = (anecdote) => {
        console.log('vote', anecdote)
        dispatch(addVote(anecdote.id))
        dispatch(newVote(anecdote.content))
        setTimeout(() => {
          dispatch(clearNotification())
        }, 5000)
    }

    return (
        <>
          {anecdotes.map(anecdote =>
              <div key={anecdote.id}>
                <div>
                  {anecdote.content}
                </div>
                <div>
                  has {anecdote.votes}
                  <button onClick={() => vote(anecdote)}>vote</button>
                </div>
              </div>
          )}
        </>
    )
}

export default AnecdoteList