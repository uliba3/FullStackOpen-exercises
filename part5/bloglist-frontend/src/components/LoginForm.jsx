import PropTypes from 'prop-types'

const LoginForm = ({
  handleLogin,
  handleSetUsername,
  username,
  handleSetPassword,
  password
}) => {
  return(
    <form onSubmit={handleLogin}>
      <div>
        username
        <input
          type="text"
          value={username}
          name="Username"
          onChange={handleSetUsername}
        />
      </div>
      <div>
        password
        <input
          type="password"
          value={password}
          name="Password"
          onChange={handleSetPassword}
        />
      </div>
      <button type="submit">login</button>
    </form>
  )
}

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleSetUsername: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  handleSetPassword: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired
}

export default LoginForm