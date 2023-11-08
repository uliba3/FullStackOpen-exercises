import { configureStore } from '@reduxjs/toolkit'

import blogReducer from './reducers/blogReducer'
import messageReducer from './reducers/messageReducer'
import userReducer from './reducers/userReducer'
import usersReducer from './reducers/usersReducer'

const store = configureStore({
  reducer: {
    blogs: blogReducer,
    message: messageReducer,
    user: userReducer,
    users: usersReducer
  }
})

export default store