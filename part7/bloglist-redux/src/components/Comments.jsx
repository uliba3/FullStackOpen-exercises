import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Blog from './Blog'
import Togglable from './Togglable'
import BlogForm from './BlogForm'
import { comment } from '../reducers/blogReducer'

const Comments = () => {
  const dispatch = useDispatch()
  const [newComment, setNewComment] = useState('')
  const blogs = useSelector(state => state.blogs)
  const { id } = useParams()
  const blog = blogs.find(blog => blog.id === id)
  const comments = blog.comments
  const createComment = (event) => {
    event.preventDefault()
    dispatch(comment({
      comment: newComment
    },id))
    setNewComment('')
  }

  return (
    <div>
      <h2>Comments</h2>
      <form onSubmit={createComment}>
        <div>
        comment:
          <input
            id="Comment"
            value={newComment}
            onChange={event => setNewComment(event.target.value)}
          />
        </div>
        <button id="submit-button" type="submit">save</button>
      </form>
      {comments.map(comment => (
        <div key={comment.id}>{comment}</div>
      ))}
    </div>
  )
}

export default Comments