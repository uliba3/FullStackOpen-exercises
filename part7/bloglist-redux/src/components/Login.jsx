import LoginForm from './LoginForm'
import Togglable from './Togglable'

const Login = () => {
  return (
    <Togglable buttonLabel="log in">
      <LoginForm
      />
    </Togglable>
  )
}

export default Login