import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllUsers } from '../reducers/usersReducer'

const Users = () => {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)
  console.log("users", users)

  return (
    <div>
      <h2>Users</h2>
      <div>Blogs created</div>
      <div>
        {users.map(user => (
          <div key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>: {user.blogs.length}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users