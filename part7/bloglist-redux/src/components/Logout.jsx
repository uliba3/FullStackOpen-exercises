import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../reducers/userReducer'

const Logout = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  return (
    <p>{user.name} logged in<button onClick={() => dispatch(logOut())}>logout</button></p>
  )
}

export default Logout