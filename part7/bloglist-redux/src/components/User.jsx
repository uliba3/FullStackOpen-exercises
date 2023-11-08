import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import Blog from './Blog'

const User = () => {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)
  const { id } = useParams()
  const user = users.find(user => user.id === id)
  const blogs = user.blogs
  console.log(id,blogs)

  return (
    <div>
      <h2>{user.name}</h2>
      <div>added blogs</div>
      <div>
        {blogs.map(blog => (
          <div key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default User