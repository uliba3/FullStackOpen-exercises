import { createSlice } from '@reduxjs/toolkit'

const messageSlice = createSlice({
  name: 'message',
  initialState: '',
  reducers: {
    newMessage(state, action) {
      return action.payload
    },
    clearMessage() {
      return ''
    }
  },
})

export const setMessage = (message, time) => {
  return dispatch => {
    console.log('newMessage', message, time)
    dispatch(newMessage(message))
    console.log('newMessage', message, time)
    setTimeout(() => {
      dispatch(clearMessage())
    }, time*1000)
  }
}


export const { newMessage, clearMessage } = messageSlice.actions

export default messageSlice.reducer