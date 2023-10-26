import { useState } from 'react'

const BlogForm = ({
  createBlog
}) => {
  const [newTitle, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newURL, setNewURL] = useState('')
  const addBlog = (event) => {
    event.preventDefault()
    createBlog({
      title: newTitle,
      author: newAuthor,
      url: newURL,
      likes: 0
    })
    setNewTitle('')
    setNewAuthor('')
    setNewURL('')
  }
  return (
    <form onSubmit={addBlog}>
      <div>
        title:
        <input
          value={newTitle}
          onChange={event => setNewTitle(event.target.value)}
        />
      </div>
      <div>
        author:
        <input
          value={newAuthor}
          onChange={event => setNewAuthor(event.target.value)}
        />
      </div>
      <div>
        URL:
        <input
          value={newURL}
          onChange={event => setNewURL(event.target.value)}
        />
      </div>
      <button type="submit">save</button>
    </form>
  )
}

export default BlogForm