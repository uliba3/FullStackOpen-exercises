import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
      newVote(state, action) {
        state = action.payload
        return "you voted '" + state + "'"
      },
      newAnecdote(state, action) {
        console.log("newAnecdote", action.payload)
        state = action.payload
        return "you created '" + state + "'"
      },
      clearNotification() {
        return ""
      }
    },
  })

export const {newVote, newAnecdote, clearNotification} = notificationSlice.actions
export default notificationSlice.reducer