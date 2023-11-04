import { useDispatch, useSelector } from "react-redux"
import { addVote } from "../reducers/anecdoteReducer"

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
    });
  
    const dispatch = useDispatch()
    const vote = (id) => {
        console.log('vote', id)
        dispatch(addVote(id))
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
                  <button onClick={() => vote(anecdote.id)}>vote</button>
                </div>
              </div>
          )}
        </>
    )
}

export default AnecdoteList