import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Blog from './Blog'
import Togglable from './Togglable'
import BlogForm from './BlogForm'

const Blogs = () => {
  const dispatch = useDispatch()
  const blogs = useSelector(state => state.blogs)
  const blogFormRef = useRef()
  const blogForm = () => (
    <Togglable buttonLabel="new Blog" ref={blogFormRef}>
      <BlogForm
      />
    </Togglable>
  )

  return (
    <div>
      <h2>Blogs</h2>
      {blogForm()}
      {blogs.map(blog => (
        <div key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
        </div>
      ))}
    </div>
  )
}

export default Blogs