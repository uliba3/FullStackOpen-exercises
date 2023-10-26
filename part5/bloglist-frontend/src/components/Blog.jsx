import { useState } from "react"

const Blog = ({ blog }) => {
  const [view, setView] = useState(false);
  const hideWhenVisible = { display: view ? 'none' : '' }
  const showWhenVisible = { display: view ? '' : 'none' }
  const toggleView = () => {
    setView(!view)
  }
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  return (
  <div style={blogStyle}>
    <div style={hideWhenVisible}>{blog.title}<button onClick={toggleView}>view</button></div>
    <div style={showWhenVisible}>
      {blog.title}<button onClick={toggleView}>hide</button><br/>
      {blog.url}<br/>
      likes {blog.likes}<button>likes</button><br/>
      {blog.author}
    </div>
  </div>  
)}

export default Blog