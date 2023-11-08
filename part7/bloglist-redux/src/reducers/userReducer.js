import { createSlice } from '@reduxjs/toolkit'

import userService from '../services/login'
import blogService from '../services/blogs'

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser(state, action) {
      return action.payload
    },
    clearUser() {
      return null
    }
  },
})

export const { setUser, clearUser } = userSlice.actions

export const load = () => {
  return async dispatch => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    console.log('loggedUserJSON', loggedUserJSON)
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      blogService.setToken(user.token)
      dispatch(setUser(user))
    }
  }
}

export const logIn = (username, password) => {
  return async dispatch => {
    console.log('username, password', username, password)
    const user = await userService.login({
      username, password,
    })
    console.log('user', user)
    window.localStorage.setItem(
      'loggedBlogappUser', JSON.stringify(user)
    )
    blogService.setToken(user.token)
    dispatch(setUser(user))
  }
}

export const logOut = () => {
  return async dispatch => {
    window.localStorage.clear()
    dispatch(clearUser())
  }
}



export default userSlice.reducer