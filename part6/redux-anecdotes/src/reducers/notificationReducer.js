import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
      newNotification(state, action) {
        return action.payload
      },
      clearNotification() {
        return ""
      }
    },
  })

export const {newNotification, newVote, newAnecdote, clearNotification} = notificationSlice.actions

export const setNotification = (notification, time) => {
  return dispatch => {
    console.log('newNotification', notification, time)
    dispatch(newNotification(notification))
    console.log('newNotification', notification, time)
    setTimeout(() => {
      dispatch(clearNotification())
    }, time*1000)
  }
}

export default notificationSlice.reducer