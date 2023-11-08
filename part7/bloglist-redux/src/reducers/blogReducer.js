import { createSlice } from '@reduxjs/toolkit'

import blogService from '../services/blogs'
import { setMessage } from './messageReducer'

const blogSlice = createSlice({
  name: 'blogs',
  initialState: [],
  reducers: {
    appendBlog(state, action) {
      state.push(action.payload)
    },
    setBlogs(state, action) {
      return action.payload
    },
    renewBlog(state, action) {
      const updatedBlog = action.payload
      console.log('updatedBlog', updatedBlog)
      return state.map(blog => blog.id === updatedBlog.id? updatedBlog : blog)
    },
    eraseBlog(state, action) {
      const deletedBlog = action.payload
      return state.filter(blog => blog.id !== deletedBlog.id)
    }
  },
})

export const initializeBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll()
    dispatch(setBlogs(blogs))
  }
}

export const createBlog = content => {
  return async dispatch => {
    try {
      const newBlog = await blogService.create(content)
      const blogs = await blogService.getAll()
      dispatch(setBlogs(blogs))
      dispatch(setMessage(`blog '${newBlog.title}' created`, 5))
    }
    catch (exception){
      dispatch(setMessage('blog could not be created', 5))
    }
  }
}

export const updateBlog = content => {
  return async dispatch => {
    try {
      const updatedBlog = await blogService.update(content)
      const blogs = await blogService.getAll()
      dispatch(setBlogs(blogs))
      dispatch(setMessage(`liked '${updatedBlog.title}'`, 5))
    }
    catch (exception) {
      dispatch(setMessage('could not like', 5))
    }
  }
}

export const deleteBlog = blog => {
  return async dispatch => {
    try {
      await blogService.erase(blog)
      dispatch(eraseBlog(blog))
      console.log("delete blog", blog)
      dispatch(setMessage(`deleted '${blog.title}'`, 5))
    }
    catch(exception) {
      dispatch(setMessage('could not be deleted', 5))
    }
  }
}

export const comment = (comment, id) => {
  return async dispatch => {
    const updatedBlog = await blogService.addComment(comment, id)
    const blogs = await blogService.getAll()
    dispatch(setBlogs(blogs))
    dispatch(setMessage(`commented '${comment.comment}'`, 5))
  }
}

export const { appendBlog, setBlogs, renewBlog, eraseBlog } = blogSlice.actions

export default blogSlice.reducer