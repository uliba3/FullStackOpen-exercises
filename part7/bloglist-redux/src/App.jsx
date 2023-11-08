import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useParams,
  useNavigate,
  useMatch
} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Togglable from './components/Togglable'
import { initializeBlogs } from './reducers/blogReducer'
import { load } from './reducers/userReducer'
import Blogs from './components/Blogs'
import Blog from './components/Blog'
import Users from './components/Users'
import User from './components/User'
import Login from './components/Login'
import Logout from './components/Logout'
import { getAllUsers } from './reducers/usersReducer'

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const message = useSelector(state => state.message)

  useEffect(() => {
    dispatch(initializeBlogs())
    dispatch(getAllUsers())
    dispatch(load())
  }, [])

  const padding = {
    padding: 5
  }

  return (
    <div>
      {user&&
        <Router>
          <div>
            <Link style={padding} to="/blogs">Blogs</Link>
            <Link style={padding} to="/users">Users</Link>
          </div>
          <Logout />
          <Routes>
            <Route path='/blogs' element={<Blogs />}/>
            <Route path='/blogs/:id' element={<Blog />}></Route>
            <Route path='/users' element={<Users />}></Route>
            <Route path='/users/:id' element={<User />}></Route>
          </Routes>
        </Router>
      }
      {!user && <Login />}
      {message}
    </div>
  )
}

export default App