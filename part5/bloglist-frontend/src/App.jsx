import { useState, useEffect, useRef } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import LoginForm from './components/LoginForm'
import Togglable from './components/Togglable'
import BlogForm from './components/BlogForm'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('') 
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState('');
  const [loginVisible, setLoginVisible] = useState(false)

  const blogFormRef = useRef()

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  const addBlog = (blogObject) => {
    blogFormRef.current.toggleVisibility()
    blogService
      .create(blogObject)
        .then(returnedBlog => {
        setBlogs(blogs.concat(returnedBlog))
        setErrorMessage(
          `${blogObject.title} by ${blogObject.author} added!!`
        )
        setTimeout(() => {
          setErrorMessage('');
        }, 5000)
      })
      .catch(error => {
        setErrorMessage(
          `${error}`
        )
        setTimeout(() => {
          setErrorMessage('');
        }, 5000)
      })
  }

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    
    try {
      const user = await loginService.login({
        username, password,
      })
      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      ) 
      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrorMessage(`wrong username or password`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const logOut = () => {
    window.localStorage.clear();
    setUser(null);
  }

  const loginForm = () => (
    <Togglable buttonLabel="log in">
        <LoginForm
          handleLogin={handleLogin}
          handleSetUsername={({ target }) => setUsername(target.value)}
          username={username}
          handleSetPassword={({ target }) => setPassword(target.value)}
          password={password}
        /> 
    </Togglable>  
  )

  const blogForm = () => (
    <Togglable buttonLabel="new Blog" ref={blogFormRef}>
      <BlogForm
        createBlog={addBlog}
      />
    </Togglable>
  )

  return (
    <div>
      <h2>Blogs</h2>
      {errorMessage}
      {!user && loginForm()} 
      {user && <div>
        <p>{user.name} logged in<button onClick={logOut}>logout</button></p>
        <h2>Create new</h2>
        {blogForm()}
        {blogs.map(blog =>
          <Blog key={blog.id} blog={blog} />
        )}
        </div>
      }
      
    </div>
  )
}

export default App