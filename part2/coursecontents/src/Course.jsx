import React from 'react'

const Course = ({course}) => {
    return (
      <>
        <Header name={course.name}></Header>
        <Content parts={course.parts}></Content>
      </>
    )
  }
  const Header = ({name}) => {
    return <h1>{name}</h1>
  }
  
  const Content = ({parts}) => {
    return (
      <>
        {parts.map(part => 
          <Part key={part.id} name={part.name} exercises={part.exercises}></Part>
        )}
        <Total parts={parts}></Total>
      </>
    )
  }
  
  const Part = ({name, exercises}) => {
    return (
      <div>{name} {exercises}</div>
    )
  }
  
  const Total = ({parts}) => {
    const total = parts.reduce((s, p) => {
      return s + p.exercises;
    }, 0);
    return (
      <b>total of {total} exercises</b>
    )
  }

  export default Course