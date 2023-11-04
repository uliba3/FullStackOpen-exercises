import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = { content, votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const vote = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`); // Fetch the specific anecdote by ID
  const voteAnecdote = response.data;
  const newAnecdote = {
    ...voteAnecdote,
    votes: voteAnecdote.votes + 1
  };

  const updateResponse = await axios.put(`${baseUrl}/${id}`, newAnecdote); // Update the anecdote by ID
  return updateResponse.data;
}

export default { getAll, createNew, vote }