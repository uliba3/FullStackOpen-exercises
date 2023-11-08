import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { updateBlog, deleteBlog } from '../reducers/blogReducer'
import Comments from './Comments'

const Blog = () => {
  const dispatch = useDispatch()
  const blogs = useSelector(state => state.blogs)
  const user = useSelector(state => state.user)
  const { id } = useParams()
  const blog = blogs.find(blog => blog.id === id)
  console.log(id, blogs, blog)

  const addLike = (event) => {
    event.preventDefault()
    console.log('updateBlog', {
      ...blog,
      likes: blog.likes+1
    }, user)
    dispatch(updateBlog({
      ...blog,
      likes: blog.likes+1
    }))
  }
  const eraseBlog = (event) => {
    event.preventDefault()
    window.confirm('Do you really want to delete?')
    dispatch(deleteBlog(blog))
  }

  return (
    <>{!blog&&
      <div>blog not found</div>
    }
    {blog&&
      <>
        <div>
          <h2>{blog.title}</h2>
          <div>added blogs</div>
          <div>{blog.url}</div>
          <div>{blog.likes} likes</div><button id="addLike" onClick={addLike}>likes</button>
          <div>added by {blog.author}</div>
          <button id="delete-button" onClick={eraseBlog}>delete</button>
        </div>
        <Comments />
      </>}
    </>
  )
}

export default Blog