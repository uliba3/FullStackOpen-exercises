import PropTypes from 'prop-types'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logIn } from '../reducers/userReducer'

const LoginForm = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const submitLogin = (event) => {
    event.preventDefault()
    dispatch(logIn(username, password))
    setUsername('')
    setPassword('')
  }

  return(
    <form onSubmit={submitLogin}>
      <div>
        username
        <input
          id='username'
          type="text"
          value={username}
          name="Username"
          onChange={() => setUsername(event.target.value)}
        />
      </div>
      <div>
        password
        <input
          id='password'
          type="password"
          value={password}
          name="Password"
          onChange={() => setPassword(event.target.value)}
        />
      </div>
      <button id="login-button">login</button>
    </form>
  )
}

export default LoginForm