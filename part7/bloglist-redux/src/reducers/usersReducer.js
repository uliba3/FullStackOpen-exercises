import { createSlice } from '@reduxjs/toolkit'

import usersService from '../services/users'
import blogService from '../services/blogs'

const usersSlice = createSlice({
  name: 'users',
  initialState: null,
  reducers: {
    updateUsers(state, action) {
      return action.payload
    }
  },
})

export const { updateUsers } = usersSlice.actions

export const getAllUsers = () => {
  return async dispatch => {
    console.log('getAllUsers')
    const users = await usersService.getAll()
    console.log('users', users)
    dispatch(updateUsers(users))
  }
}


export default usersSlice.reducer